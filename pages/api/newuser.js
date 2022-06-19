import prisma from "../../lib/prisma";

export default async function handle(req, res) {
    const result = await prisma.user.create({
        data: {
            email: req.email,
            password: req.password,
            firstName: req.firstName,
            lastName: req.lastName,
        },
    })
    res.json(result)
}