import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Stripe from 'stripe';

dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/create-checkout', async (req, res) => {
  try {
    const { amount, isMonthly } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ message: 'Invalid amount' });
    }

    const amountInCents = Math.round(amount * 100);

    const sessionConfig = {
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Donation to Spirits In Unity',
              description: isMonthly ? 'Monthly support donation' : 'One-time support donation'
            },
            unit_amount: amountInCents,
            ...(isMonthly && {
              recurring: { interval: 'month' },
            }),
          },
          quantity: 1,
        },
      ],
      mode: isMonthly ? 'subscription' : 'payment',
      success_url: `${req.headers.origin || req.headers.referer?.split('?')[0] || `http://${req.headers.host}`}/?success=true`,
      cancel_url: `${req.headers.origin || req.headers.referer?.split('?')[0] || `http://${req.headers.host}`}/?canceled=true`,
      submit_type: isMonthly ? undefined : 'donate',
    };

    const session = await stripe.checkout.sessions.create(sessionConfig);
    res.status(200).json({ id: session.id, url: session.url });
  } catch (error) {
    console.error('Stripe error:', error);
    res.status(500).json({ message: error.message });
  }
});

export const apiMiddleware = app;
