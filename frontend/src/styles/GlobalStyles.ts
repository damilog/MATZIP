import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body{
    display: flex;
    align-items: center;
    justify-content: center; 
    background-color: #ffffff;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif; 
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input, button {
    background-color: transparent;
    border: none;
  }

  button{
    background-color: transparent;
    border: none;
    cursor:pointer
  }

  h1, h2, h3, h4, h5, h6{
    font-family:'Maven Pro', sans-serif;
  }
  
  ol, ul, li {
    list-style: none;
  }
  
  `;

export default GlobalStyles;
