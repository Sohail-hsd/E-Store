const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRETE_KEY);

export default function handler(req, res) {
    const { amount, email, token } = req.body;

    stripe.customers
        .create({
            email: email,
            source: token.id,
            name: token.card.name,
        })
        .then((customer) => {
            return stripe.charges.create({
                amount: parseFloat(amount) * 100,
                description: `Payment for USD ${amount}`,
                currency: "USD",
                customer: customer.id,
            });
        })
        .then((charge) => res.status(200).send(charge))
        .catch((err) => console.log(err))
}