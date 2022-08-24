const stripe = require('stripe')('sk_test_51LZEPECEyXIeUuGFYP4rckgVXzij2q0xAvLnAE3DbnxhvWBg7eQ5XT8CZMtVdABoF4K9ofPBdqYwSNJJYNsCRxhE00VmvrP27c');

export default function handler(req, res) {

    return stripe.products.create({
        name: 'Starter Subscription',
        description: '$12/Month subscription',
    }).then(product => {
        stripe.prices.create({
            unit_amount: 1200,
            currency: 'usd',
            recurring: {
                interval: 'month',
            },
            product: product.id,
        }).then(price => {
            res.status(200).json({
                product_id: 'Success! Here is your starter subscription product id: ' + product.id,
                price_id: 'Success! Here is your premium subscription price id: ' + price.id
            })
        });
    });
}