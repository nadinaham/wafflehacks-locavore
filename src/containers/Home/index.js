import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import LogoFull from '../../assets/LogoFull.png'
import cat1 from '../../assets/cat1.png'
import { MiddleContainer, BrownContainer, Logo1, Logo2, Title, Box, Subtitle, } from './styles'

const Home = () => {
  const [modalVis, setModalVis] = useState(false)
  const [data, setData] = useState('')
  const history = useHistory()
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
          { data ? (
            <>
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
                <span style={{margin: '2vh auto' }}>
                  <Button width='30vh' text="get started?" onClick={() => goTo('recs')} />
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
