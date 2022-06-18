import React from 'react'
import { ButtonBox, ButtonText } from './styles'

const Button = ({
  text,
  width,
  height,
  onClick,
}) => (
  <ButtonBox
    width={width}
    height={height}
    onClick={() => onClick()}
  >
    <ButtonText style={{ cursor: 'pointer' }}>
      {text}
    </ButtonText>
  </ButtonBox>
)

export default Button
