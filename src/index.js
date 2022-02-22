import { ChakraProvider, extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import '@fontsource/manrope';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './index.css';

const theme = extendTheme(
  {
    fonts: {
      heading: 'Manrope, sans-serif',
      body: 'Manrope, sans-serif',
    },
    colors: {
      primary: '#0F4C81',
    },
  },
  withDefaultColorScheme({ colorScheme: 'primary' })
);

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
