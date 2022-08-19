import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    color: #F4FFF8;
    background-color: #000F08;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  }
  *,*::after,*::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
