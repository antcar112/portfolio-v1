import { createGlobalStyle } from 'styled-components';

import { media } from '../utils/media';

export default createGlobalStyle`
    
    /* Font Imports */
    @import url('https://fonts.googleapis.com/css?family=Covered+By+Your+Grace|Karla|Rubik:400,700&display=swap');

    /**** Resets ****/
    html {
        box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    /*** Global ****/

    img {
        max-width: 100%;
        height: auto;
    }

    body {
        margin: 0;
        font-family: ${props => props.theme.font.body};
        background: ${({ theme }) => theme.color.bg};
        color: ${({ theme }) => theme.color.text};
        font-size: 16px;
    }

    main {
        padding-top: 60px;
    }

    h1 {
        font-family: ${({ theme }) => theme.font.heading};
        font-weight: 700;
        color: ${({ theme }) => theme.color.text};
        font-size: 5em;

    }
    h2 {
        font-family: ${({ theme }) => theme.font.heading};
        font-weight: 700;
        color: ${({ theme }) => theme.color.text};
        font-size: 3em;

    }
    h3 {
        font-family: ${({ theme }) => theme.font.heading};
        font-weight: 400;
        color:  ${({ theme }) => theme.color.primary};
        font-size: 2em;

    }
    p, 
    nav a, 
    aside a, 
    a, 
    span, 
    div, 
    button {
        font-family: ${({ theme }) => theme.font.body};
        font-weight: 400;
        color: ${({ theme }) => theme.color.text};
        font-size: 1em;

    }

    h1,
    h2,
    h3,
    p {
        margin: 0;

    }


`;
