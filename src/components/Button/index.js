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
    onClick={() => this.onClick()}
  >
    <ButtonText style={{ cursor: 'pointer' }}>
      {text}
    </ButtonText>
  </ButtonBox>
)

export default Button
