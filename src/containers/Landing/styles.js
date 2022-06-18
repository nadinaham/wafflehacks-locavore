import styled from 'styled-components'

export const Center = styled.div`
position: relative; 
top: 48%; 
-ms-transform: translateY(-50%);
transform: translateY(-50%);
`

export const Logo1 = styled.img`
  margin: 0 auto;
  width: 100%;
  height: auto;
  background: ${props => props.background};
  object-fit: contain;
`
