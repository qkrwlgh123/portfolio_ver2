import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    a {
        text-decoration: none;
        color: inherit;
    }

    * {
        box-sizing: border-box;
        font-family: 'Apple SD Gothic neo';
    }

    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 16px;
        vertical-align: baseline;
    }
    
    body {
        line-height: 1.2;
     
        background-color: #F6F9F0;
    }


    ol, ul{ 
        list-style: none;
    }

    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
`;

export default GlobalStyle;
