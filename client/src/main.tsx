import React from 'react';
import ReactDOM from 'react-dom/client';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import axios from 'axios';

import App from './App';
import { colors, fontSize, fontWeight, GlobalStyle } from './components/LV1';
import { setupInterceptorsTo } from './controllers';
import './index.css';

setupInterceptorsTo(axios);

const theme: DefaultTheme = {
  colors: colors,
  fontSize: fontSize,
  fontWeight: fontWeight,

  transition: '0.2s ease',
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
