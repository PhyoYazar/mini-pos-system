import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 * {
   margin: 0;
    padding: 0;
  }
  
  *,
  *::before,
  *::after{
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

    @keyframes moveleft {
      0% {
        opacity: 0;
        transform: translateX(-15px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
  
    @keyframes moveright {
      0% {
        opacity: 0;
        transform: translateX(7px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes moveup {
      0% {
        opacity: 0;
        transform: translateY(-20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes movedown {
      0% {
        opacity: 0;
        transform: translateY(40px);
      }

      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;
