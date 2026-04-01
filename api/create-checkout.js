// Vercel Serverless Function — creates a Stripe Checkout session
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { answers } = req.body || {};

    // Store answers as metadata so we can pass them back after payment
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'LaunchModel Full Prompt Chain',
            description: 'Unlock all 5 personalized AI prompts for your business model',
            images: ['https://launchmodel.ai/gumroad-cover.png'],
          },
          unit_amount: 1700, // $17.00
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_URL || 'https://launchmodel.ai'}/?unlocked=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL || 'https://launchmodel.ai'}/`,
      metadata: {
        answers: JSON.stringify(answers || {}),
      },
    });

    res.status(200).json({ sessionId: session.id, url: session.url });
  } catch (err) {
    console.error('Stripe error:', err);
    res.status(500).json({ error: err.message });
  }
};
