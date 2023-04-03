import styled from "styled-components";
import { MarginCapsule } from "./GlobalStyle";
import { variablesStyle } from "./variablesStyle";

export const EarlyStyle = styled.section`
    background-color: ${variablesStyle.colors.LightenBlue};
    padding: 50px 0;
    
    ${MarginCapsule}{
        .earlyArticle{

            h2, p{
                color: white;
                
            }
            h2{
                margin-bottom: 20px;
            }
            p{
                max-width: 340px;
                margin: 0 auto 30px;
            }
        }
        .earlyEmailDiv{
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
                border: 0;
                box-shadow: ${variablesStyle.others.boxShadowButton};
            }

            input{
                padding-left: 10px;
            }
            button{
                background-color: ${variablesStyle.colors.blue};
                color: white;
                font-weight: bold;
                font-size: 1em;
            }
        }
    }
`;