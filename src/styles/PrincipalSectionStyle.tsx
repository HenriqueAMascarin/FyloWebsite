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

            form{
                display: flex;
                flex-direction: column;
                gap: 20px;
                max-width: 300px;
                margin: 0 auto;

                button, input[type="email"]{
                    padding: 12px 16px;
                    border-radius: 5px;
                    font-size: 0.9em;
                    box-shadow: ${variablesStyle.others.boxShadowButton};
                }
                input[type="email"]{
                    border: 1px solid ${variablesStyle.colors.darkenBlue};
                }
                button{
                    border: none;
                    background-color: ${variablesStyle.colors.blue};
                    color: ${variablesStyle.colors.white};
                    font-weight: bold;
                    cursor: pointer;
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

                .imgPersons{
                    margin: 0 0 0 auto;
                }
                h1{
                    margin: 0;
                }

                article{
                
                    h1, p{
                        text-align: start;
                        max-width: 550px;
                        margin-left: 0;
                    }

                    form{
                        margin: 0;
                        flex-flow: row wrap;
                        width: 100%;
                        justify-content: center;
                        max-width: none;
                        flex-direction: row;

                        input{
                            flex-grow: 1;
                        }
                        button{
                            width: 30%;
                        }
                    }

                }
                
            }
        }
    }
`;