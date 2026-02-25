import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const { amount, isMonthly } = req.body;

        if (!amount || amount <= 0) {
            return res.status(400).json({ message: 'Invalid amount' });
        }

        // Amount is in dollars, convert to cents for Stripe
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
                        // If it's a monthly donation, set the recurring interval
                        ...(isMonthly && {
                            recurring: {
                                interval: 'month',
                            },
                        }),
                    },
                    quantity: 1,
                },
            ],
            // If interval is used, mode must be 'subscription'
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
}
