import prisma from "../../lib/prisma";

export default async function handle(req,res) {
    const user = await prisma.users.findUnique({where :
                       {email: {equals: req.email}},
                      })
    res.json(user)
}