import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  html,body {
    height: 100vh;
    overflow-x: hidden;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Roboto', -apple-system, system-ui, sans-serif;
  }
  body{
    font-family: 'Nunito Sans', sans-serif;

  }

  html, body {
    scroll-behavior: smooth;

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

  @media (min-width: 600px) {
    html {
      font-size: 15px;
    }
  }
  
  @media (min-width: 700px) {
    html {
      font-size: 20px;
    }
  }

  @media (min-width: 1000px) {
    html {
      font-size: 25px;
    }
  }
`;
