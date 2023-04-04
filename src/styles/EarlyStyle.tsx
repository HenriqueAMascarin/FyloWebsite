import styled from "styled-components";
import { MarginCapsule } from "./GlobalStyle";
import { variablesStyle } from "./variablesStyle";

export const EarlyStyle = styled.section`
    background-color: ${variablesStyle.colors.LightenBlue};
    padding: 50px 0;
    
    ${MarginCapsule}{
        .flexEarly{
            .earlyArticle{
                max-width: 340px;
                margin: 0 auto;

                h2, p{
                    color: white;
                    
                }
                h2{
                    margin-bottom: 20px;
                }
                p{
                    
                    margin-bottom: 30px;
                }
            }
            .earlyEmailForm{
                display: flex;
                align-items: center;
                flex-direction: column;
                gap: 14px;
                max-width: 300px;
                margin: 0 auto;

                input, button{
                    width: clamp(100px, 70vw, 300px);
                    padding: 14px 0;
                    border-radius: 2px;
                    font-size: 0.9em;
                    border: none;
                    box-shadow: ${variablesStyle.others.boxShadowButton};
                }

                input{
                    padding-left: 10px;
                }
                button{
                    background-color: ${variablesStyle.colors.blue};
                    color: white;
                    font-weight: bold;
                    cursor: pointer;
                }
            }
        }
    }

    @media screen and (min-width: ${variablesStyle.others.screen}){
        padding: 120px 0 60px;

        ${MarginCapsule}{
            .flexEarly{
                display: flex;
                justify-content: center;
                align-items: center;
                
                .earlyArticle{
                    margin: 0;
                    max-width: 420px;
                    text-align: start;
                }

                .earlyEmailForm{
                    margin: 0 0 0 auto;
                    align-self: flex-start;
                    align-items: flex-start;
                    max-width: none;
                    flex-basis: 600px; // input text max-width

                    input{
                        max-width: 600px;
                        width: 100%;
                    }
                    button{
                        max-width: 230px;
                    }
                }
            }
        }
    }
`;