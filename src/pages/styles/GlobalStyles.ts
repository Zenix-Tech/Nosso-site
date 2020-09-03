import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    height: 100vh;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Roboto', -apple-system, system-ui, sans-serif;
  }
  body{
    font-family: 'Nunito Sans', sans-serif;
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
  li,a{
    text-decoration:none;
    list-style-type:none;
  }

  :root{
    --color-main: #5E17EB;
    --color-secondary:#2F2E41;
    --color-white: #F2F2F2;
    --color-text: #A6A6A6;
  }
`;