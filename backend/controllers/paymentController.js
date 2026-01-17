import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


export const createPaymentIntent = async (req, res) => {
  try {
    const { amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // in smallest currency unit (e.g. paise)
      currency: "inr",
      payment_method_types: ["card"],
    });

    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Payment failed" });
  }
};
