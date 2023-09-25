import styled from "styled-components";
interface StyledLogoProps {
    textColor?: string; 
  }


export const StyledLogo = styled.div<StyledLogoProps>`
width: 220px;
height: 35px;

display: flex;
align-items: center;
column-gap: 7px;

font-size: 30px;
font-weight: 400;

color: ${(props) => (props.textColor || '#fff')};
`