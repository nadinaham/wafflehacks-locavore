import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import theme from '../../theme'
import { Center, Logo1 } from './styles'
import LogoRev from '../../assets/LogoRev.png'

const Landing = () => {
  const [modalVis, setModalVis] = useState(false)
  const history = useHistory()

  const handleSubmit = bool => {
    history.push({
      pathname: '/home',
      state: bool,
    })
  }

  return (
    (
      <div style={{
        position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#D1DCD9',
      }}
      >
        <Center>
          <div style={{
            margin: '0 auto', width: '50vh', height: '37vh',
          }}
          >
            <Logo1
              src={LogoRev}
              alt="WH Logo"
            />
          </div>
          <div style={{
            margin: '0 auto', width: 'fit-content', display: 'flex', flexDirection: 'row',
          }}
          >
            <div style={{ margin: '0 auto' }}>
              <span style={{ marginLeft: 20, marginRight: 10 }}>
                <Button text="customer" width="13vh" height="5.5vh" onClick={() => handleSubmit(false)} />
              </span>
              <Button text="business" width="13vh" height="5.5vh" onClick={() => handleSubmit(true)} />
            </div>
          </div>
        </Center>
      </div>
    )
  )
}

export default Landing
