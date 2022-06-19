import styled from 'styled-components'
import theme from '../../theme'

export const MiddleContainer = styled.div`
  height: 93vh;
  background-color: ${theme.colors.periwinkle};
  overflow: scroll;
  width: 100vw;
`

export const Logo1 = styled.img`
  margin-left: 7.5%;
  width: 80vw;
  height: auto;
  background: ${props => props.background};
  opacity: 0.2;
  z-index: -3;
`

export const Logo2 = styled.img`
  width: 20vw;
  height: auto;
  margin: 0 auto;
`

export const BrownContainer = styled.div`
  display: flex;
  flex-direction: column;

  top: 33vh;
  right: 25vw;
  left: 25vw;
  position: absolute;
  margin: 0 auto;
  width: 50vw;
  border-radius: 19px;
  background: ${theme.colors.milkChoco};
  z-index: 3;

`

export const Title = styled.p`
  font-family: ${theme.fonts.jostSemi};
  font-size: 50px;
  color: ${theme.colors.peach}
`

export const Subtitle = styled.p`
  width: 35vw;
  margin: 0 auto;
  font-family: ${theme.fonts.jostSemi};
  text-align: center;
  font-size: 20px;
  color: ${theme.colors.peach}
`

export const Box = styled.div`
  margin: 3vh auto;
  background-color: ${theme.colors.darkChoco};
  height: 9vh;
  padding: 1.5vh;
  width: fit-content;
  border-radius: 19px;
`
