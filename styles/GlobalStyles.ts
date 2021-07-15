import { createGlobalStyle } from 'styled-components';
import colors from './colors';
import variables from './variables';

const GlobalStyle = createGlobalStyle`

  ${colors}
  ${variables}

  * {
    box-sizing: border-box;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html {
    font-size: 62.5%; /* 1rem === 10px */
  }

  body {
    margin: 0;
    font-family: var(--font-primary);
    font-size: 1.8rem;
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`;

export default GlobalStyle;
