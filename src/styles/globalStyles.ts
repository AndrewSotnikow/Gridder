import { createGlobalStyle } from 'styled-components/macro'
import { respondAbove } from './mediaQueries'
import "./_fonts.scss"

const GlobalStyles = createGlobalStyle`

    html,
    body {
        width: 100%;
        min-width: 320px;
        height: 100%;
        min-height: 100%;
        color: ${({ theme }) => theme.colors.grayscale_900};
        font-family: ${({ theme }) => theme.fonts.text};

    }
    html {
        overflow-x: hidden;
        font-size: 1px;
        scroll-behavior: smooth;

        &.-modal-open {
            width: 100%;
            height: 100%;
            overflow: hidden;

            @media ${respondAbove.xl} {
                padding-right: 8px;
            }
        }
    }

    #root {
        height: 100%;
    }

    body {
        font-weight: normal;
        font-family: LatoRegular, sans-serif;
        font-size: 16px;
        color: #20183B;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${({ theme }) => theme.colors.grayscale_200};
    }

    * {
        padding: 0;
        margin: 0;
        word-wrap: break-word;
        outline: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    a {
        color:  ${({ theme }) => theme.colors.primary_500};
        text-decoration: none;
        cursor: pointer;
        font-family: ${({ theme }) => theme.fonts.text_bold};

        &:hover {
            color: ${({ theme }) => theme.colors.primary_700};
        }
        &:focus,&:active {
            color: inherit;
            outline-color: ${({ theme }) => theme.colors.grayscale_900};
        }
    }

    button {
        padding: 0;
        color: inherit;
        cursor: pointer;
        background-color: transparent;
        border-width: 0;
    }

    figure {
        margin: 0;
    }

    ul,
    ol,
    dd {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    ol {
        list-style-position: inside;
        list-style-type: decimal;

        li + li {
            margin-top: 8px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
        font-size: inherit;
        font-weight: inherit;
    }

    p {
        margin: 0;
    }

    cite {
        font-style: normal;
    }

    fieldset {
        padding: 0;
        margin: 0;
        border-width: 0;
    }

    input[type='search']::-ms-clear {
        display: none;
        width: 0;
        height: 0;
    }

    input[type='search']::-ms-reveal {
        display: none;
        width: 0;
        height: 0;
    }

    input {
        background-color: transparent;
        border: 0;
        appearance: none;
    }

    input::-moz-focus-inner {
        padding: 0;
        margin: 0;
        border: 0;
    }

    section {
        max-width: 100vw;
        overflow: hidden;
    }

    img {
        display: block;
        max-width: 100%;
        border: 0;
    }
`

export default GlobalStyles
