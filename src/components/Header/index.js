import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Container,
  SubContainer,
  Logo1,
  Icon,
  DisplayName,
} from './styles'
import Button from '../Button'
import LOGOSHORT from '../../assets/LOGOSHORT.png'
import Modal from '../Modal'
import theme from '../../theme'

const Header = ({
  isRec,
}) => {
  const [isLoggedIn, setLoggedIn] = useState(true)
  const [isBiz, setIsBiz] = useState(true)
  const [loginVis, setLoginVis] = useState(false)
  const [signUpVis, setSignUpVis] = useState(false)
  const history = useHistory()
  const goTo = string => {
    history.push('/'.concat(string))
  }

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
        <Icon onClick={() => goTo('home')} style={{ display: 'flex', flexDirection: 'row' }}>
          {
            isBiz ? (
              <>
              <div style={{ marginLeft: 70, width: '12vh', height: '12vh' }}>
                <Logo1
                  src={LOGOSHORT}
                  alt="WH Logo"
                />
              </div>
              <DisplayName>@ExampleBiz</DisplayName>
              </>
            )
              : (
                <>
                  <span style={{
                    marginLeft: 70, paddingTop: '2vh', fontFamily: 'Jost Semibold', fontSize: '6vh', color: 'white',
                  }}
                  >
            Loca
                  </span>
                  <div style={{ width: '12vh', height: '12vh' }}>
                    <Logo1
                      src={LOGOSHORT}
                      alt="WH Logo"
                    />
                  </div>
                  <span style={{
                    paddingTop: '2vh', fontFamily: 'Jost Semibold', fontSize: '6vh', color: 'white',
                  }}
                  >
            ore
                  </span>
                </>
              )
          }

        </Icon>
        <SubContainer>
          {isLoggedIn ? (
            <>
              { isBiz ? (<></>)
                : (
                  <span style={{ marginLeft: 20, marginRight: 20 }}>
                    {isRec ? (<Button text="my punches" width="20vh" height="6vh" onClick={() => goTo('home')} />)
                      : (<Button text="for me" width="15vh" height="6vh" onClick={() => goTo('recs')} />)}
                  </span>
                )}
              <span style={{ marginRight: 70 }}>
                <Button text="log out" width="15vh" height="6vh" onClick={console.log('log out')} />
              </span>
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
