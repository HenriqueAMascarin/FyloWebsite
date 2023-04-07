import styled from "styled-components";
import { MarginCapsule } from "./GlobalStyle";
import { variablesStyle } from "./variablesStyle";

export const HeaderStyle = styled.header`
    background-color: ${variablesStyle.colors.white};
    position: relative;
    z-index: 1;
    margin-bottom: 60px;
    
    ${MarginCapsule}{
        .flexHeader{
            display: flex;
            align-items: center;
            gap: 8px;
            position: relative;
            padding: 34px 0 0;
            background-color: white;

            .logoFylo svg{
                display: inline-block;
                width: clamp(90px, 15vw, 140px);
            }

            .navHeader{
                position: absolute;
                top: 100%;
                width: 100%;
                transition: .4s all ease-in-out;
                opacity: 0;
                z-index: -1;
                top: -10px;
                
                &.active{
                    opacity: 1;
                    top: 100%;
                }

                ul{
                    display: flex;
                    flex-direction: column;

                    li{

                        a{
                            text-decoration: none;
                            color: ${variablesStyle.colors.darkenBlue};
                            font-size: clamp(1.1em, 7vw, 1.15em);
                            display: block;
                            padding: 4px 0;
                            transition: .1s all ease-in-out;

                            &:hover{
                                color: ${variablesStyle.colors.lightenBlue};
                            }
                        }
                    }   
                }
                
            }

            .hamburguerMenu{
                margin-left: auto;
                border: none;
                background-color: transparent;
                cursor: pointer;
                
                span{
                    display: block;
                    width: 30px;
                    height: 5px;
                    margin: 5px 0;
                    background-color: ${variablesStyle.colors.darkenBlue};
                    transition: .2s all ease-in-out;
                }

                &.active{
                    span{
                        background-color: ${variablesStyle.colors.blue};
                    }
                }
            }
        }
    }

    @media screen and (min-width: ${variablesStyle.others.screen}){
    
        ${MarginCapsule}{
            .flexHeader{
                .hamburguerMenu{
                    display: none;
                }

                .navHeader{
                    position: relative;
                    z-index: 0;
                    top: 0;
                    opacity: 1;

                    &.active{
                        top: 0;
                    }

                    ul{
                        flex-direction: row;
                        justify-content: flex-end;

                        li a{
                            padding: 0 8px;
                        }
                    }
                }
            }
        }
    }
`;