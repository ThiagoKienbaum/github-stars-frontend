import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-font-smoothing: antialiased;
        -o-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
    }

    html, body, #root {
        min-height: 100%;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 100;
        font-size: 12px;
        line-height: 30px;
        color: #777;
        background: linear-gradient(#8CA6DB, #B993D6);
        opacity: 0.95;
    }

    body, input, button {
        color: #222;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
    }

    button {
        cursor: pointer;
    }
`;
