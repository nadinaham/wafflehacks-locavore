import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import Header from '../../components/Header'
import Button from '../../components/Button'
import LogoFull from '../../assets/LogoFull.png'
import cat1 from '../../assets/cat1.png'
import cat4 from '../../assets/cat4.png'
import WaffleCard from '../../components/Waffle'

import {
  MiddleContainer, Row, Column, Click, BizBox, EntryBox2, Subtitle2, BizTitle, BizSubTitle, EntryBox, Entry, BrownContainer, Logo1, Logo2, Title, Box, Subtitle,
} from './styles'
import ProgressBar from '../../components/ProgressBar'

const Home = props => {
  const location = useLocation()
  const [isBiz, setIsBiz] = useState(false)

  useEffect(() => {
    if (location.state) { setIsBiz(location.state) } // result: 'some_value'
  }, [location])

  const [data, setData] = useState('')
  const [count, setCount] = useState(6)
  const history = useHistory()

  const complete = count => {
    console.log(count / 8)
    return (count / 8) * 100
  }

  const goTo = string => {
    history.push('/'.concat(string))
  }
  return (
    (
      <div style={{ position: 'relative' }}>
        <Header isBiz={isBiz} isRec={false} />
        <MiddleContainer>
          <div style={{
            zIndex: -100, marginRight: 'auto', marginLeft: 'auto',
          }}
          >
            <Logo1
              src={LogoFull}
              alt="WH Logo"
            />
          </div>
          {isBiz ? (
            <EntryBox2>
              <BizBox>
                <Title>XXX locavores</Title>
                <Subtitle2>punching your card</Subtitle2>
              </BizBox>
              <BizBox>
                <Row>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Title>XXX purchases</Title>
                    <Subtitle2>via Locavore</Subtitle2>
                  </div>
                  <Click onClick={() => goTo('order')} style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{
                      width: 'fit-content', fontFamily: 'Jost', color: '#F9E1D2', fontSize: '3vh', paddingTop: '3.5vh', marginRight: '2vh',
                    }}
                    >
                        add orders
                    </div>
                    <div style={{ color: '#F9E1D2', fontSize: '10vh' }}>→</div>
                  </Click>
                </Row>
              </BizBox>
              <BizBox>
                <Title>$XXX earned</Title>
                <Subtitle2>via Locavore</Subtitle2>
              </BizBox>
            </EntryBox2>
          ) : (
            <>
              { data ? (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <EntryBox>
                    <Entry>
                      <WaffleCard count={2} />
                      <Column>
                        <BizTitle>
                        Example Business 1
                        </BizTitle>
                        <BizSubTitle>
                        Example reward milestone progress.
                          <p>Address of business.</p>
                        </BizSubTitle>
                        <ProgressBar completed={complete(2)} number={2} />
                      </Column>
                    </Entry>
                    <Entry>
                      <WaffleCard count={4} />
                      <Column>
                        <BizTitle>
                        Example Business 2
                        </BizTitle>
                        <BizSubTitle>
                        Example reward milestone progress.
                          <p>Address of business.</p>
                        </BizSubTitle>
                        <ProgressBar completed={complete(4)} number={4} />

                      </Column>
                    </Entry>
                  </EntryBox>
                </div>
              )
                : (
                  <>
                    <BrownContainer>
                      <Box>
                        <Title>
                        uh oh!
                        </Title>
                      </Box>
                      <Subtitle>
                    looks like you aren't participating in any rewards programs!
                      </Subtitle>
                      <Logo2
                        src={cat1}
                        alt="a cat lol"
                        onClick={() => setData(true)}
                      />
                      <span style={{ margin: '2vh auto' }}>
                        <Button width="30vh" text="get started?" onClick={() => goTo('recs')} />
                      </span>
                    </BrownContainer>
                  </>
                )}
            </>
          )}
        </MiddleContainer>
      </div>
    )
  )
}

export default Home
