import prisma from "../../lib/prisma";

export default async function handle(req,res) {
    const punchcards = await prisma.punchcards.findMany({where :
                       {user_id: {equals: req.user_id}},
                      })
    res.json(punchcards)
}