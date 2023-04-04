import styled from "styled-components";
import { MarginCapsule } from "./GlobalStyle";
import { variablesStyle } from "./variablesStyle";

export const FooterStyle = styled.footer`
    background-color: ${variablesStyle.colors.darkenBlue};
    padding: 70px 0 30px;

    p{
        color: ${variablesStyle.colors.white};

        a{
            text-decoration: none;
            color: ${variablesStyle.colors.blue};
        }
    }

    ${MarginCapsule}{
        .flexFooter{
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
                        font-size: 1.3em;
                        text-decoration: none;
                        color: ${variablesStyle.colors.white};

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
                    width: 40px;
                    height: 40px;
                    border: 1px solid ${variablesStyle.colors.white};
                    border-radius: 100%;
                    
                    svg{
                        display: block;
                        width: 20px;
                        height: 20px;

                        path{
                            fill: ${variablesStyle.colors.white};
                        }
                    }
                }
            }
        }
    }

    @media screen and (min-width: ${variablesStyle.others.screen}){
        ${MarginCapsule}{
            .flexFooter{
                display: flex;

                .listsItemsFooter{
                    display: flex;
                    margin-left: auto;
                }

                .iconsFooter{
                    margin-right: auto;
                }
            }
        }
    }
`;