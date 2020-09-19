import { createGlobalStyle } from 'styled-components'

import { media } from '../utils/media'

export default createGlobalStyle`
    
    /* Font Imports */
    /* @import url('https://fonts.googleapis.com/css?family=Karla:400,700|Rubik:400,700,900&display=swap'); */
    /* Now importing via typeface library in gatsby-browser */

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
        text-align: center;

        ${media.down.lg} {
            font-size: 4.5em;
        }
        ${media.down.md} {
            font-size: 4em;
        }
        ${media.down.sm} {
            font-size: 3em;
        }
        ${media.down.xs} {
            font-size: 2.5em;
        }

    }
    h2 {
        font-family: ${({ theme }) => theme.font.heading};
        font-weight: 700;
        color: ${({ theme }) => theme.color.text};
        font-size: 3em;

        ${media.down.lg} {
            font-size: 3em;
        }
        ${media.down.md} {
            font-size: 2.5em;
        }
        ${media.down.sm} {
            font-size: 2.3em;
        }
        ${media.down.xs} {
            font-size: 2em;
        }

    }
    h3 {
        font-family: ${({ theme }) => theme.font.heading};
        font-weight: 400;
        color:  ${({ theme }) => theme.color.primary};
        font-size: 2em;

        ${media.down.xl} {
            font-size: 1.8em;
        }
        ${media.down.lg} {
            font-size: 1.6em;
        }
        ${media.down.md} {
            font-size: 1.6em;
        }
        ${media.down.sm} {
            font-size: 1.5em;
        }
        ${media.down.xs} {
            font-size: 1.4em;
        }

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


`
