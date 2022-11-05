import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    /* line-height: 1.5; */
    margin: 0;
    padding: 0;
    font-size: 16px;
  }
`;

export default GlobalStyle;
