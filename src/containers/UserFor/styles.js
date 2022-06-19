import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    height: 80vh;
    width: 80vw;
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

export const SubContainer = styled.div`
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
  position: absolute;
  width: 132px;
  height: 199px;
  left: 371px;
  top: 347.38px;

  background: #C6A590;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`

export const HorizontalBox = styled.div`
  width: 35vw;
  height: 95px;
  margin-bottom: 3vh;
  margin-left: 4vh;
  margin-top: 1.5vh;

  background: ${props => props.color};
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

  color: #FFFFFF;
`

export const Subtitle = styled.p`
  position: absolute;
  width: 166px;
  height: 26px;
  left: 91px;
  top: 347.38px;

  font-family: 'Jost Semibold';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 90%;

  color: #7F5130;
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