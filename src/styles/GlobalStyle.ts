import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    outline: none;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;

    background-color: #191222;
    color: #E1E1E6;
  }
`
