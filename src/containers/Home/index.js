import React, {useState} from 'react'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import { MiddleContainer } from './styles'

const Home = () => {
  const [modalVis, setModalVis] = useState(false)
  return (
    (
        <>
      <MiddleContainer>
        <Modal
          visible={modalVis}
          closeFunc={() => setModalVis(false)}
        >
hello friends

        </Modal>
        <Button text="log in" width="90px" height="37px" onClick={console.log('hi')} />
        <Button text="sign up" width="90px" height="37px" onClick={() => setModalVis(true)} />
        <Button text="register" width="90px" height="37px" onClick={console.log('hi')} />
        <Button text="let's go!" width="90px" height="37px" onClick={console.log('hi')} />
        
      </MiddleContainer>
      <Footer />
      </>
    )
  )
}

export default Home
