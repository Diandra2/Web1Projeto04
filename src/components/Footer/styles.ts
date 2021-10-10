import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Footer = styled.footer`
    background-color: ${colors.beige};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    div {
    width: 50%;
    text-align: center;
  }
    picture {
      img{
        height: 50px;
        border: 0;
        margin: 5px;      
      }
  }
`
export const A = styled.a`
  margin: 0 auto;
`