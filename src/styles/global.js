import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: white;
    transition-duration: 800ms;
  }

  a:hover {
    color: gray;
  }
`;
 
export default GlobalStyle;