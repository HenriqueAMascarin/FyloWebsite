import styled from "styled-components";
import { variablesStyle } from "./variablesStyle";
import curveSectionDesktop from "../assets/images/bg-curve-desktop.svg";
import curveSectionMobile from "../assets/images/bg-curve-mobile.svg"
import { MarginCapsule } from "./GlobalStyle";
import arrow from '../assets/images/icon-arrow.svg';
import snippets from '../assets/images/icon-quotes.svg';

export const ProductiveSectionStyle = styled.section`

    &::before{
        content: "";
        display: block;
        width: 100%;
        height: 100px;
        background-image: url(${curveSectionMobile});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    ${MarginCapsule}{
        background-color: ${variablesStyle.colors.gray};
        padding-bottom: 100px;

        h2{
            margin: 80px 0 30px;
        }
        p{
            color: ${variablesStyle.colors.darkenBlue};
            max-width: ${variablesStyle.others.maxWidthText};
            margin: 0 auto;
        }
        
        .articleInfo{
            div{
                width: fit-content;
                margin: 30px auto 50px;

                &::after{
                    content: '';
                    display: block;
                    width: 100%;
                    height: 2px;
                    background-color: hsl(170, 45%, 43%);
                }
                
                a{ 
                    color: hsl(170, 45%, 43%);
                    text-decoration: none;
                    font-size: 1.2em;

                    &::after{
                        content: '';
                        background-image: url(${arrow});
                        background-repeat: no-repeat;
                        background-size: cover;
                        display: inline-block;
                        margin-left: 10px;
                        width: 20px;
                        height: 20px;
                        vertical-align: middle;
                    }
                }
            }
        }

        .articleCeo{
            background-color: white;
            padding: 30px 40px 20px;
            border-radius: 10px;
            text-align: start;
            max-width: 450px;
            margin: 0 auto 0;

            .infoFylo{
                line-height: 26px;
                font-size: 1em;
                margin-bottom: 20px;

                &::before{
                    content: '';
                    display: block;
                    width: 15px;
                    height: 15px;
                    background-image: url(${snippets});
                    background-repeat: no-repeat;
                    background-size: cover;
                }
            }

            img{
                width: 40px;
                border-radius: 100%;
                margin-right: 20px;
            }
            
            .divCeo{
                display: flex;
                align-items: center;

                h3{
                    font-weight: bold;
                }

                p{
                    font-size: 0.7em;
                }
            }
        }
    }
`;