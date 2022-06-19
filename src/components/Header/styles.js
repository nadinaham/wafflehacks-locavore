import styled from 'styled-components'
import theme from '../../theme'

export const Icon = styled.div`
  cursor: pointer;
`

export const Container = styled.div`
  background: ${theme.colors.milkChoco};
  position: sticky;
  height: 15vh;
  width: 100vw;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  @media (max-width: 500px) {
      box-sizing: border-box;
  }
`

export const SubContainer = styled.div`
  height: 14vh;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 449px) {
      display:flex;
      flex-direction: column;
      margin-right: 0;
    }
`


export const Logo1 = styled.img`
  width: 100%;
  height: auto;
  background: ${props => props.background};
  object-fit: contain;
`

export const DisplayName = styled.p`
  font-family: 'Jost';
font-style: normal;
font-weight: 400;
font-size: 3vh;
line-height: 90%;
padding-top: 4.5vh;
margin-left: 10px;
/* or 18px */

text-align: center;

color: ${theme.colors.peach};
`