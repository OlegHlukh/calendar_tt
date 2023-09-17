import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }
  
  html, 
  body {
    margin: 0;
    padding: 0;
    font-size: 10px;
  }

  input:focus, input:active{
    outline: none;
  }
`;

export default GlobalStyle;
