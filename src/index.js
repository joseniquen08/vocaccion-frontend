import '@fontsource/manrope';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './styles/index.css';
import { ChakraProviderTheme } from './styles/theme.chakra';

ReactDOM.render(
  <BrowserRouter>
    <ChakraProviderTheme>
      <App />
    </ChakraProviderTheme>
  </BrowserRouter>,
  document.getElementById('root')
);
