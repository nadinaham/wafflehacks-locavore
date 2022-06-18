import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Logo from '../../assets/Logo.svg'
import { MiddleContainer, Logo1 } from './styles'

const Home = () => {
  const [modalVis, setModalVis] = useState(false)
  return (
    (
      <>
        <Header />
        <MiddleContainer>
        </MiddleContainer>
        <Footer />
      </>
    )
  )
}

export default Home
