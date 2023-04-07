import styled, { createGlobalStyle } from "styled-components";
import { variablesStyle } from "./variablesStyle";

export const GlobalStyle = createGlobalStyle`
    body, html{
        width: 100%;
        height: 100%;
        background-color: ${variablesStyle.colors.white};
        text-align: center;
        font-family: sans-serif;
    }
    #root{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    img{
        width: 100%;
        display: block;
    }
    li{
        list-style: none;
    }

    h1{
        font-size: clamp(1.8em, 6vw, 2.1em);
    }
    h2{
        font-size: clamp(1.6em, 6vw, 1.9em);
    }
    p{
        font-size: clamp(1em, 6vw, 1.1em);
    }
    h1,h2,p{
        color: ${variablesStyle.colors.darkenBlue};
    }

    .imgPersons{
        max-width: 566px;
        max-height: 406px;
        height: auto;
        margin: 0 auto;
    }
`;

export const MarginCapsule = styled.div`
    max-width: 1366px;
    padding: 0 30px;
    margin: 0 auto;
`;