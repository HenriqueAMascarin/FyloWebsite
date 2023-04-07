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
                gap: 30px;
                max-width: 300px;
                margin: 0 auto;

                button, label input{
                    padding: 12px 16px;
                    border-radius: 2px;
                    font-size: 0.9em;
                    box-shadow: ${variablesStyle.others.boxShadowButton};
                    width: 100%;
                }
                
                label{
                    input{
                        border: 1px solid ${variablesStyle.colors.darkenBlue};
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
                    input:invalid{
                        border: 1px solid red;
                        outline: none;
                    }
                    :has(input:invalid) p{
                        display: block;
                    }
                }

                button{
                    border: none;
                    background-color: ${variablesStyle.colors.blue};
                    color: ${variablesStyle.colors.white};
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

                        label{
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