import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *,
  *::before,
  *::after{
    margin: 0;
    padding: 0;
    box-sizing:inherit ;
  }
  
  html{
    box-sizing: border-box;
    /* font-size: 100%; */
    
    @media (min-width: 1536px){
      font-size: 120%;
    }
  }

  body {
    height: 100vh;

    font-family:  -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    
  }
`;
