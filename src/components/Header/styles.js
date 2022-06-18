import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  height: 12vh;
  width: 100vw;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 2%;
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
  height: 15vh;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 8.32vw;
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

export const Logo = styled.img`
  margin-left: 7.5%;
  width: 20%;
  min-height: 20px;
  min-width: 150px;
  background: ${props => props.background};
`

export const Seperator = styled.div`
  width: max(1.8vw, 10px);
`

export const Profile = styled.img`
  width: 50px;
  height: 50%;
`
