import styled from "styled-components";
import { MarginCapsule } from "./GlobalStyle";
import { variablesStyle } from "./variablesStyle";

export const FooterStyle = styled.footer`
    background-color: ${variablesStyle.colors.darkenBlue};
    padding: 70px 0 30px;
    flex-grow: 1;

    p, a{
        font-size: 1.1em;
    }

    p{
        color: ${variablesStyle.colors.white};

        a{
            color: ${variablesStyle.colors.white};
            transition: .1s all ease-in-out;

            &:hover{
                color: ${variablesStyle.colors.lightenBlue};
            }
        }
    }

    ${MarginCapsule}{
        .logoFylo{
            display: block;
            width: fit-content;
            margin-bottom: 40px;

            svg{
                width: 150px;
                path{
                    fill: ${variablesStyle.colors.white};
                }
            }
                
        }

        .flexFooter{

            .contactsFooter{
                display: flex;
                align-items: center;
                
                &:last-of-type{
                    padding-top: 20px;
                }

                p{
                    color: ${variablesStyle.colors.white};
                }

                img{
                    width: 25px;
                    height: auto;
                    margin-right: 24px;
                }
            }

            .listsItemsFooter{
                .listFooter{
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 15px;
                    margin-top: 70px;
            
                    li a{
                        text-decoration: none;
                        color: ${variablesStyle.colors.white};
                        transition: .1s all ease-in-out;

                        &:hover{
                            color: ${variablesStyle.colors.lightenBlue};
                        }
                    }
                }
            }
            

            .iconsFooter{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 30px;
                margin: 60px 0 50px;
                
                a{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 32px;
                    height: 32px;
                    border: 1px solid ${variablesStyle.colors.white};
                    border-radius: 100%;
                    transition: .1s all ease-in-out;

                    &:hover{
                        border: 1px solid ${variablesStyle.colors.lightenBlue};

                        path{
                            fill: ${variablesStyle.colors.lightenBlue};
                        }
                    }

                    svg{
                        display: block;
                        width: 18px;
                        height: 18px;

                        path{
                            fill: ${variablesStyle.colors.white};
                            transition: .1s all ease-in-out;
                        }
                    }
                }
            }
        }
    }

    @media screen and (min-width: ${variablesStyle.others.screen}){
        ${MarginCapsule}{
            .logoFylo{
                margin-bottom: 20px;
            }

            .flexFooter{
                display: flex;
                align-items: flex-start;
                gap: 30px;
                margin-bottom: 100px;

                .listsItemsFooter{
                    display: flex;
                    align-items: flex-start;
                    margin-left: auto;
                    gap: 130px;

                    .listFooter{
                        margin: 0;
                    }
                }

                .iconsFooter{
                    margin: 0 0 0 auto;
                }
            }
        }
    }
`;