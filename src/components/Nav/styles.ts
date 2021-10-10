import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Nav = styled.nav`
    ul{
        display: flex;
        flex-direction: row;
        border-left-width: 0;
        border-left: 0;
        padding: 0.5rem;
    
        li{
            list-style: none;
            padding: 0.8rem;
            border-top-width: 0 ;
            border: 0.2rem solid ${colors.black};
            padding-top: 0.8rem;
            background-color: ${colors.beige};
            align-items: center;
            justify-content: center;
            margin-right: 1.5rem;
            margin-left: 1.5rem;
            

            a{
            text-decoration: none;
            
                :hover{
                    text-decoration: none;
                }
            }
        }
    }
`