import styled from "styled-components";
import { MarginCapsule } from "./GlobalStyle";
import { variablesStyle } from "./variablesStyle";

export const HeaderStyle = styled.header`
    padding: 34px 0;
    
    ${MarginCapsule}{
        div{
            display: flex;
            align-items: center;
            gap: 8px;

            .logoFylo svg{
                display: inline-block;
                width: clamp(90px, 15vw, 140px);
            }

            nav{
                margin-left: auto;

                li{
                    display:inline-block;

                    &:nth-child(2){
                        a{
                            padding: 0 20px;
                        }
                    }

                    a{
                        text-decoration: none;
                        color: ${variablesStyle.colors.darkenBlue};
                        font-size: clamp(1em, 7vw, 1.05em);
                    }
                }   
            }
        }
    }
`;