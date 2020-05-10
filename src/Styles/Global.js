import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

  }

body {
  background: #FFFFFF;

  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font-family: 'Roboto', sans-serif;

  }

:root {
  font-size: 24px;
  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
  }
}
`;

export default GlobalStyle;
