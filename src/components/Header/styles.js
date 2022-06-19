import styled from 'styled-components'
import theme from '../../theme'

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
  /* padding-top: 2%;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 449px) {
      display:flex;
      flex-direction: column;
    } */
`
// export const ImgContainer = styled.img`
//   width: 250px;
//   height: 45px;
//   margin-left: 9.09vw;
//   @media (max-width: 449px) {
//       height: 35px;
//       width: 175px;
//       margin-left: 0;
//     }
// `
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

export const StyledRectangle = styled.div`
  height: 60px;
  width: 2px;
  background: ${props => props.theme.colors.mint};
  margin: 0 10px;
  @media (max-width: 449px) {
      display: none;
    }
`

export const Logo1 = styled.img`
  width: 100%;
  height: auto;
  background: ${props => props.background};
  object-fit: contain;
`

export const Seperator = styled.div`
  width: max(1.8vw, 10px);
`

export const Profile = styled.img`
  width: 50px;
  height: 50%;
`
