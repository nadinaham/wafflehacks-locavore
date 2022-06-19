import React, { useState } from 'react'
import VanillaInput from '../../components/Input'
import theme from '../../theme'
import Header from '../../components/Header'
import Button from '../../components/Button'
import { Title } from './styles'

const Order = () => {
  const [fName, setfName] = useState('')
  const [lName, setLName] = useState('')
  const [email, setEmail] = useState('')

  return (
    (
      <div style={{
        position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#D1DCD9',
      }}
      >
        <Header isBiz />
        <div style={{
          padding: '3vh', justifyContent: 'center', alignItems: 'center', backgroundColor: '#AB8974', width: '80vh', margin: '10vh auto', display: 'flex', flexDirection: 'column',
        }}
        >
          <Title>Order Form</Title>
          <VanillaInput
            width="340px"
            height="45px"
            type="name"
            background={theme.colors.white}
            placeholder="Customer First Name"
            defaultValue={fName}
            onChange={setfName}
          />
          <VanillaInput
            width="340px"
            height="45px"
            type="name"
            background={theme.colors.white}
            placeholder="Customer Last Name"
            defaultValue={lName}
            onChange={setLName}
          />
          <VanillaInput
            width="340px"
            height="45px"
            type="email"
            background={theme.colors.white}
            placeholder="Customer Email"
            defaultValue={email}
            onChange={setEmail}
          />
          <div style={{ marginTop: '4vh' }}>
            <Button text="submit" width="13vh" style={{ margin: '0 auto' }} />
          </div>
        </div>
      </div>
    )
  )
}

export default Order
