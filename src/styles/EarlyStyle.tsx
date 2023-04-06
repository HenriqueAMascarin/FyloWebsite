import styled from "styled-components";
import { MarginCapsule } from "./GlobalStyle";
import { variablesStyle } from "./variablesStyle";

export const EarlyStyle = styled.section`
    background-color: ${variablesStyle.colors.purpleBlue};
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
                gap: 30px;
                max-width: 300px;
                margin: 0 auto;

                input[type="email"], button{
                    width: 100%;
                    padding: 14px 0;
                    border-radius: 2px;
                    font-size: 0.9em;
                    border: none;
                    box-shadow: ${variablesStyle.others.boxShadowButton};
                }

                label{
                    width: 100%;
                    input[type="email"]{
                        border: 1px solid ${variablesStyle.colors.darkenBlue};
                        padding-left: 10px;
                    }
                    p{
                        display: none;
                        position: absolute;
                        font-size: clamp(0.6em, 4vw, 0.7em);
                        margin: 4px 0 0;
                        color: red;
                    }
                }
                :has(button:hover) label{
                    input[type="email"]:invalid{
                        border: 1px solid red;
                        outline: none;
                    }
                    :has(input[type="email"]:invalid) p{
                        display: block;
                    }
                }

                button{
                    background-color: ${variablesStyle.colors.blue};
                    color: white;
                    font-weight: bold;
                    cursor: pointer;
                    transition: .1s all ease-in-out;

                    &:hover{
                        background-color: ${variablesStyle.colors.lightenBlue};
                    }
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

                    label{
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