import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import { MiddleContainer, Logo1 } from './styles'

export const getServerSideProps = async (user_id) => {
  const res = await fetch("http://localhost:5000/api/punchcards");
  const punchcards = await res.json();
  return {
    props: { punchcards },
  };
}

const Home = (punchcards) => {
  const [modalVis, setModalVis] = useState(false)
  return (
    (
      <>
        <Header />
        <MiddleContainer>
          {punchcards}
        </MiddleContainer>
        <Footer />
      </>
    )
  )
}

export default Home
