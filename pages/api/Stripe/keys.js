export default function handler(req, res) {
    if(req.method === "GET"){
        res.status(200).json({
            PublishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
        })
    }else{
        res.status(405).ens('Method not allowed')
    }
}