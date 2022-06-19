import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/Header'
import Button from '../../components/Button'
import LogoFull from '../../assets/LogoFull.png'
import cat1 from '../../assets/cat1.png'
import WaffleCard from '../../components/Waffle'

import {
  MiddleContainer, Column, BizTitle, BizSubTitle, EntryBox, Entry, BrownContainer, Logo1, Logo2, Title, Box, Subtitle,
} from './styles'
import ProgressBar from '../../components/ProgressBar'

const Home = () => {
  const [isBiz, setIsBiz] = useState(false)
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
        <Header isRec={false} />
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
          { true ? (
            <>
              <EntryBox>
                <Entry>
                  <WaffleCard count={1} />
                  <Column>
                    <BizTitle>
                        Example Business 1
                    </BizTitle>
                    <BizSubTitle>
                        Example reward milestone progress.
                      <p>Address of business.</p>
                    </BizSubTitle>
                    <ProgressBar completed={complete(1)} number={1} />
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
            </>
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
                  />
                  <span style={{ margin: '2vh auto' }}>
                    <Button width="30vh" text="get started?" onClick={() => goTo('recs')} />
                  </span>
                </BrownContainer>
              </>
            )}
        </MiddleContainer>
      </div>
    )
  )
}

export default Home
