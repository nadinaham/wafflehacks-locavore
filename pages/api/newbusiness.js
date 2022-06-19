import prisma from "../../lib/prisma";

export default async function handle(req, res) {
    const result = await prisma.businesses.create({
        data: {
            email: req.email,
            password: req.password,
            name: req.name,
        },
    })
    res.json(result)
}