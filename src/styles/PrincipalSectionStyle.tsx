import styled from "styled-components";
import { MarginCapsule } from "./GlobalStyle";
import { variablesStyle } from "./variablesStyle";

export const PrincipalSectionStyle = styled.section`
    padding: 60px 0 120px;

    ${MarginCapsule}{

        .flexPrincipal{
            h1{
                max-width: ${variablesStyle.others.maxWidthText};
                margin: 30px auto 0;
            }
            p{
                margin: 20px auto 30px;
                max-width: ${variablesStyle.others.maxWidthText};
            }

            div{
                display: flex;
                flex-direction: column;
                gap: 20px;
                max-width: 300px;
                margin: 0 auto;

                button, input[type="email"]{
                    padding: 16px 20px;
                    border-radius: 5px;
                }
                input[type="email"]{
                    font-size: 1.1em;
                    border: 1px solid ${variablesStyle.colors.darkenBlue};
                }
                button{
                    border: none;
                    background-color: ${variablesStyle.colors.blue};
                    color: ${variablesStyle.colors.white};
                    font-size: 1.2em;
                    font-weight: bold;
                    box-shadow: ${variablesStyle.others.boxShadowButton};
                }
            }
        }
        
    }

    @media screen and (min-width: ${variablesStyle.others.screen}){
        ${MarginCapsule}{
            .flexPrincipal{
                display: flex;
                flex-direction: row-reverse;
                align-items: center;
                justify-content: center;

                .imgPersons, h1{
                    margin: 0;
                }
            }
        }
    }
`;