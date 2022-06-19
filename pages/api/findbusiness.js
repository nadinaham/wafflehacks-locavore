import prisma from "../../lib/prisma";

export default async function handle(req,res) {
    const business = await prisma.businesses.findUnique({where :
                       {email: {equals: req.email}},
                      })
    res.json(business)
}