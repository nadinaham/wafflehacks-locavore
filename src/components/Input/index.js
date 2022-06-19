import React from 'react'
import { Input } from './styles'

const VanillaInput = ({
  width,
  height,
  background,
  placeholder,
  value,
  type,
  isShadow,
  onChange,
  outline,

}) => {
  const outline2 = outline || 'white'
  return (
    <Input
      width={width}
      height={height}
      backgroundColor={background || 'linear-gradient(107.86deg, #F0F2F4 9.86%, #FDFEFF 100%)'}
      type={type}
      value={value}
      shadow={isShadow ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : '0'}
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
      outline={outline2}
    />
  )
}

export default VanillaInput
