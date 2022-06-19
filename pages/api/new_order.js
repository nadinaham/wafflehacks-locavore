import prisma from "../../lib/prisma";

export default async function handle(req, res) {
    const result = await prisma.orders.create({
        data: {
            // need to query for these
            user_id: req.user_id,
            business_id: req.business_id,
        },
    })
    res.json(result)
}