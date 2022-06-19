import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import { MiddleContainer, Logo1 } from './styles'
import { PrismaClient } from '@prisma/client'

prisma = new PrismaClient()

async function query_punchcards(user_id) {
  const punchcards = await prisma.punchcards.findMany({where :
                     {user_id: {equals: user_id}},
                    })
  console.log(punchcards)
}

const Home = (user_id) => {
  const [modalVis, setModalVis] = useState(false)
  return (
    (
      <>
        <Header />
        <MiddleContainer>
        query_punchcards(this.user_id)
        .catch((e) => {
          throw e
        })
        .finally(async () => {
          await prisma.$disconnect()
        })
        </MiddleContainer>
        <Footer />
      </>
    )
  )
}

export default Home
