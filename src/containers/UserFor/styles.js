import styled from 'styled-components'
import theme from '../../theme'

export const Container = styled.div`
    position: relative;
    height: fit-content;
    width: fit-content;
    margin: 0 auto;

    background: #7F5130;
    border-radius: 19px;
`

export const Logo = styled.img`
  position: relative;
  width: 150px;
  height: auto;
  margin: 0 auto;
`

export const Logo2 = styled.img`
  padding: 0.5vh;
  max-width: 98%;
`

export const Logo3 = styled.img`
  margin-top: 5vh;
  width: 92%;
  height: 70%;
`

export const Logo4 = styled.img`
  max-width: 25vw;
  max-height: 13vh;
`

export const Logo6 = styled.img`
  margin: 0 auto;
  max-width: 18vw;
`

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`

export const VerticalBox = styled.div`
  min-width: 50%;
  height: 36vh;
  display: flex;
  justify-content: center;
  margin-bottom: 3vh;
  
  background: #C6A590;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`

export const SubVerticalBox = styled.div`
  margin-top: 0.5vh;
  width: fit-content;
  padding: 0.3vh;
  height: 35vh;
  display: flex;
  justify-content: center;
  
  background: #36271e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`

export const HorizontalBox = styled.div`
  padding-top: 2vh;
  padding-left: 3vh;
  align-items: right;
  display: flex;
  flex-direction: column;
  width: 32vw;
  height: 95px;
  margin-bottom: 3vh;
  margin-left: 6vh;
  margin-top: 1.5vh;

  background: ${props => props.color};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.75);
  border-radius: 19px;
`

export const HorizontalBox2 = styled.div`
  height: 15vh;
  margin-right: 15;
  margin-bottom: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #c6a590;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.75);
  border-radius: 19px;
`

export const Line = styled.p`
    box-sizing: border-box;
width: 40vh;
height: 1px;
margin: 4vh auto;

background: #FFFFFF;
border: 1px dashed #FFFFFF;
`

export const Title = styled.p`
  text-align: center;
  padding-top: 5vh;
  margin-right: 10px;
  margin-left: 10px;

  font-family: 'Jost Semibold';
  font-style: normal;
  font-weight: 700;
  font-size: 8vh;
  line-height: 90%;

  color: ${props => props.color};
`

export const Title3 = styled.p`
  font-family: 'Jost Semibold';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 90%;

  color: #7F5130;
`

export const Subtitle2 = styled.p`
  font-family: 'Jost';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 90%;
margin-top: 1vh;

color: #7F5130;
`

export const Subtitle = styled.p`
  text-align: center;
  max-width: 30vw;
  margin-bottom: 3vh;
  margin-right: 2vw;
  margin-left: 2vw;
  font-family: 'Jost Semibold';
  font-style: normal;
  font-weight: 700;
  font-size: 3vh;
  line-height: 3.3vh;

  color: ${theme.colors.peach};
`

export const Text = styled.p`
  position: absolute;
left: 13.11%;
right: 43.23%;
top: 38.46%;
bottom: 57.1%;

font-family: 'Jost';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 90%;
/* or 13px */


color: #7F5130;
`

export const BrownContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1vh;

  margin-left: 4vw;
  margin-bottom: 10vh;
  min-width: 30vw;
  border-radius: 19px;
  background: ${theme.colors.milkChoco};

`

export const Title2 = styled.p`
  font-family: ${theme.fonts.jostSemi};
  font-size: 40px;
  color: ${theme.colors.peach}
`

export const Box = styled.div`
  margin: 3vh auto;
  background-color: ${theme.colors.darkChoco};
  height: 9vh;
  padding: 1.5vh;
  width: fit-content;
  border-radius: 19px;
`
