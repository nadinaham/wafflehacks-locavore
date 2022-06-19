import styled from 'styled-components'

export const Input = styled.input`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  font-family: ${props => props.theme.fonts.openSans};
  font-size: 18px;
  color: black;
  padding: 1%;
  background: ${props => props.background};
  border-style: solid;
  border-color: ${props => props.outline};
  box-shadow: ${props => props.shadow};
  border-radius: 13px;
  margin: 8px;

  &::placeholder{
    color: ${props => props.theme.fonts.grey};
  }
  textarea:focus, input:focus{
    outline: none;
  }
  &:focus {
        outline: none;
    }
`
