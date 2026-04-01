// Vercel Serverless Function — verifies a Stripe session and returns answers
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { sessionId } = req.body || {};
    if (!sessionId) return res.status(400).json({ error: 'Missing sessionId' });

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== 'paid') {
      return res.status(402).json({ error: 'Payment not completed' });
    }

    // Return the stored answers from metadata
    const answers = JSON.parse(session.metadata?.answers || '{}');
    res.status(200).json({ unlocked: true, answers });
  } catch (err) {
    console.error('Verify error:', err);
    res.status(500).json({ error: err.message });
  }
};
