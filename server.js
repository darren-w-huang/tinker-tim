const express = require('express');
const app = express();
const path = require('path');
// Copy the .env.example in the root into a .env file in this folder
require('dotenv').config({ path: './.env' });

// Ensure environment variables are set.
checkEnv();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
  appInfo: { // For sample support and debugging, not required for production:
    name: "stripe-samples/checkout-one-time-payments",
    version: "0.0.1",
    url: "https://github.com/stripe-samples/checkout-one-time-payments"
  }
});


app.use(express.static(path.join(__dirname, 'build')));
app.use(express.urlencoded());
app.use(
  express.json({
    // We need the raw body to verify webhook signatures.
    // Let's compute it only when hitting the Stripe webhook endpoint.
    verify: function (req, res, buf) {
      if (req.originalUrl.startsWith('/webhook')) {
        req.rawBody = buf.toString();
      }
    },
  })
);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/plane', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/static/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/order', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/success_payment*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/config', async (req, res) => {
  const price = await stripe.prices.retrieve(process.env.PRICE);

  res.send({
    publicKey: process.env.STRIPE_PUBLISHABLE_KEY,
    unitAmount: price.unit_amount,
    currency: price.currency,
  });
});

// Fetch the Checkout Session to display the JSON result on the success page
app.get('/checkout-session', async (req, res) => {
  const { sessionId } = req.query;
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  res.send(session);
});

app.post('/create-checkout-session', async (req, res) => {
  const domainURL = process.env.DOMAIN;
  const { quantity } = req.body;
  // Create new Checkout Session for the order
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        price: process.env.PRICE,
        quantity: quantity
      },
    ],
    success_url: `${domainURL}/success_payment?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${domainURL}`,
    shipping_address_collection: {
      allowed_countries: ["US"]
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 400,
            currency: 'usd',
          },
          display_name: 'Media mail',
          // Delivers in exactly 1 business day
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 2,
            },
            maximum: {
              unit: 'business_day',
              value: 9,
            },
          }
        }
      },
    ],
    // automatic_tax: {enabled: true}
  });

  return res.redirect(303, session.url);
});

// Webhook handler for asynchronous events.
app.post('/webhook', async (req, res) => {
  let data;
  let eventType;
  // Check if webhook signing is configured.
  if (process.env.STRIPE_WEBHOOK_SECRET) {
    // Retrieve the event by verifying the signature using the raw body and secret.
    let event;
    let signature = req.headers['stripe-signature'];

    try {
      event = stripe.webhooks.constructEvent(
        req.rawBody,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`);
      return res.sendStatus(400);
    }
    // Extract the object from the event.
    data = event.data;
    eventType = event.type;
  } else {
    // Webhook signing is recommended, but if the secret is not configured in `config.js`,
    // retrieve the event data directly from the request body.
    data = req.body.data;
    eventType = req.body.type;
  }

  if (eventType === 'checkout.session.completed') {
    console.log(`🔔  Payment received!`);
  }

  res.sendStatus(200);
});

app.listen(4242, () => console.log(`Node server listening on port ${4242}!`));


function checkEnv() {
  const price = process.env.PRICE;
  if(price === "price_12345" || !price) {
    console.log("You must set a Price ID in the environment variables. Please see the README.");
    process.exit(0);
  }
}
