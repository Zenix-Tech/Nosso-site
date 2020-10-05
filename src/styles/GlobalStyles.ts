import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  margin: auto;
  height: 100%;
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

body, html {
  scroll-behavior: smooth;
}

:root{
  --color-main: #5E17EB;
  --color-secondary:#2F2E41;
  --color-white: #F2F2F2;
  --color-text: #A6A6A6;
}

  @media (min-width: 600px) {
    html {
      font-size: 10px;
    }
  }
  
  @media (min-width: 700px) {
    html {
      font-size: 15px;
    }
  }

  @media (min-width: 1000px) {
    html {
      font-size: 20px;
    }
  }
`;

export default GlobalStyle;
