import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Global, ThemeProvider } from '@emotion/react';
import 'modern-normalize';
import { PersistGate } from 'redux-persist/integration/react'

import { App } from 'components';
import { GlobalStyles, theme } from 'styles';
import { persistor, store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
          </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
