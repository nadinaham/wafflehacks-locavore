import React, { useState } from 'react'
import Button from '../../components/Button'
import theme from '../../theme'
import LogoRev from '../../assets/LogoRev.png'
import Header from '../../components/Header'
import {
  BrownContainer, Logo2, Title, Box, Subtitle,
  Container, Title2, SubContainer, Column, Logo, Title3, Subtitle2, Logo3, Logo4, Logo6, Line, Row, HorizontalBox, HorizontalBox2, SubVerticalBox, VerticalBox,
} from './styles'
import cat2 from '../../assets/cat2.png'
import shop1 from '../../assets/shop1.png'
import shop2 from '../../assets/shop2.png'
import shop3 from '../../assets/shop3.png'
import cat3 from '../../assets/cat3.png'

const UserFor = () => {
  const [data, setData] = useState('')
  return (
    (
      <div style={{
        paddingBottom: '15vh', overflow: 'scroll', height: '100vh', backgroundColor: theme.colors.periwinkle,
      }}
      >
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
              <Title color='white'>
            my recommended:
              </Title>
              <Line />
            </div>
            <SubContainer>
              <Column style={{ marginRight: 40 }}>
                {data
                  ? (
                    <>
                      <HorizontalBox color={theme.colors.white}>
                        <Title3>
                            Business 1
                        </Title3>
                        <Subtitle2>
                            This is the description for Business 1, including what they sell, where they are, etc.
                        </Subtitle2>
                      </HorizontalBox>
                      <HorizontalBox color={theme.colors.peach} />
                      <HorizontalBox color={theme.colors.milkChoco} />
                    </>
                  )
                  : (
                    <BrownContainer>
                      <Box>
                        <Title2>
                        uh oh!
                        </Title2>
                      </Box>
                      <Subtitle>
                    looks like you don't have any recs! to generate some, go out and purchase from small businesses partnered with locavore to enter their rewards program!
                      </Subtitle>
                      <Logo6
                        src={cat3}
                        alt="anotha cat"
                      />
                    </BrownContainer>
                  )}

              </Column>
              <div style={{ marginRight: '5vw' }}>
                <Column style={{ minWidth: '32vw' }}>
                  <HorizontalBox2>
                    <Logo4
                      src={shop2}
                      alt="open sign"
                    />
                  </HorizontalBox2>
                  <Row>
                    <VerticalBox style={{ marginRight: 15 }}>
                      <Logo2
                        src={shop1}
                        alt="open sign"
                      />
                    </VerticalBox>
                    <VerticalBox>
                      <SubVerticalBox>
                        <Logo3
                          src={shop3}
                          alt="open sign"
                        />
                      </SubVerticalBox>
                    </VerticalBox>
                  </Row>
                </Column>
              </div>
            </SubContainer>
          </Container>
        </div>
      </div>
    )
  )
}

export default UserFor
