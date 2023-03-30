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
        font-size: 1.8em;
    }
    h2{
        font-size: 1.5em;
    }
    p{
        font-size: 1.1em;
    }
    h1,h2,p{
        color: ${variablesStyle.colors.darkenBlue};
    }

    .imgPersons{
        max-width: 500px;
        margin: 0 auto;
    }
`;

export const MarginCapsule = styled.div`
    max-width: 1366px;
    padding: 0 30px;
    margin: 0 auto;
`;