import styled from 'styled-components'
import theme from '../../theme'

export const Container = styled.div`
    width: 100%;
    height: 10vh;
    bottom: 0;
    text-align: center;
    background: ${theme.colors.periwinkle};
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    position: fixed;
`

export const FooterText = styled.p`
  font-size: max(2.3vmin, 12px);
  font-family: 'Jost';
  margin-top: 10px;
  color: ${theme.colors.darkBrown};
  line-height: max(3vh, 15px);
  margin-bottom: 3px;
`
