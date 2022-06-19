import styled from 'styled-components'
import theme from '../../theme'

export const ButtonBox = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${theme.colors.darkChoco};
  border: none;
  border-radius: 5px;
  @media (max-width: 449px) {
    height: 30px;
    width: 85px;
    border: 2px solid;
    border-radius: 20px;
    }
`

export const ButtonText = styled.p`
  font-family: ${theme.fonts.jostSemi};
  font-size: 2.5vh;
  font-weight: 700;
  color: ${theme.colors.peach};
  @media (max-width: 449px) {
    font-size: 10px;
    font-weight: 700;
  }
`
