import React, { useState } from 'react'
import Button from '../../components/Button'
import theme from '../../theme'
import LogoRev from '../../assets/LogoRev.png'
import Header from '../../components/Header'
import {
  Container, Title, SubContainer, Column, Logo, Line, Row, HorizontalBox, VerticalBox,
} from './styles'
import cat2 from '../../assets/cat2.png'

const UserFor = () => {
  const [modalVis, setModalVis] = useState(false)
  return (
    (
      <div style={{ paddingBottom: '15vh', overflow: 'scroll', height: '100vh', backgroundColor: theme.colors.periwinkle }}>
        <Header isRec />
        <div style={{ marginTop: 40 }}>
          <div style={{ height: '75px', marginLeft: '60vw' }}>
            <Logo
              src={cat2}
              alt="a cat lol"
            />
          </div>
          <Container>
            <div style={{ width: '100%' }}>
              <Title>
            my recommended:
              </Title>
              <Line/>
            </div>
            <SubContainer>
              <Column>
                <HorizontalBox color={theme.colors.white}>

                </HorizontalBox>
                <HorizontalBox color={theme.colors.peach}>
                
                </HorizontalBox>
                <HorizontalBox color={theme.colors.milkChoco}>
                    
                </HorizontalBox>
              </Column>
              <Column>

                <Row />
              </Column>
            </SubContainer>
          </Container>
        </div>
      </div>
    )
  )
}

export default UserFor
