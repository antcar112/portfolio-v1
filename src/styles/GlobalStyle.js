import { media } from '@src/utils'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

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
        font-family: ${(props) => props.theme.font.body};
        background: ${({ theme }) => theme.color.bg};
        color: ${({ theme }) => theme.color.text};
        font-size: 16px;
    }

    main {
        padding-top: 60px;
    }

    h1, h2, h3 {
        font-family: ${({ theme }) => theme.font.heading};
    }

    h1 {
        font-size: 5em;

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

    h4 {
        font-size: 1.6em;

        ${media.down.xl} {
            font-size: 1.6em;
        }
        ${media.down.lg} {
            font-size: 1.5em;
        }
        ${media.down.md} {
            font-size: 1.5em;
        }
        ${media.down.sm} {
            font-size: 1.3em;
        }
        ${media.down.xs} {
            font-size: 1.3em;
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
