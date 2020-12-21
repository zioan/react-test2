import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background: #e9e9e9;
  /* color: white; */
}

h1{
  text-align: center;
  margin-bottom: 10px;
}

`;

export default GlobalStyle;
