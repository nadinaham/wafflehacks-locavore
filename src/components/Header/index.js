/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react'
import {
  Container,
  SubContainer,
  Logo1,
} from './styles'
import Button from '../Button'
import MASSIVE_L from '../../assets/MASSIVE_L.png'
import Modal from '../Modal'
import theme from '../../theme'

const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(true)
  const [loginVis, setLoginVis] = useState(false)
  const [signUpVis, setSignUpVis] = useState(false)

  const handleSwitch = () => {
    setLoginVis(false)
    setSignUpVis(true)
  }

  const handleSwitch2 = () => {
    setSignUpVis(false)
    setLoginVis(true)
  }
  return (
    <>
      <Modal
        visible={loginVis}
        closeFunc={() => setLoginVis(true)}
      >
        <div style={{ fontFamily: 'Jost' }}>
        login

        New Account?
          {' '}
          <span onClick={() => handleSwitch()}><u>Sign up</u></span>
        </div>
      </Modal>
      <Modal
        visible={signUpVis}
        closeFunc={() => setSignUpVis(false)}
      >
        <div style={{ fontFamily: 'Jost' }}>
        signup

        Existing Account?
          {' '}
          <span onClick={() => handleSwitch2()}><u>Log in</u></span>
        </div>
      </Modal>
      <Container>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{ marginLeft: '3vh', width: '7vh', backgroundColor: 'pink', paddingTop: '3%', height: '12vh' }}>
            <Logo1
              src={MASSIVE_L}
              alt="WH Logo"
            />
          </div>
          <span style={{ paddingTop: '3vh', fontSize: '40px', fontFamily: 'Jost Semibold' }}>ocavore</span>
        </div>
        <SubContainer>
          {isLoggedIn ? (
            <>
              <Button text="profile" width="90px" height="37px" onClick={console.log('hi')} />
              <Button text="log out" width="90px" height="37px" onClick={console.log('hi')} />
            </>
          ) : (
            <>
              <Button text="sign up" width="90px" height="37px" onClick={() => setSignUpVis(true)} />
              <Button text="log in" width="90px" height="37px" onClick={() => setLoginVis(true)} />
            </>
          )}
        </SubContainer>
      </Container>
    </>
  )
}
export default Header