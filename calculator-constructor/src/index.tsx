import React from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyles from './ui-lib';
import InterFonts from './vendor';
import App from './app/App';

const rootDiv = document.getElementById('root');
const rootNode = createRoot(rootDiv as Element);

rootNode.render(
  <React.StrictMode>
    <GlobalStyles />
    <InterFonts />
    <App />
  </React.StrictMode>,
);
