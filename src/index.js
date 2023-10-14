import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import { persistor, store } from 'redux/store';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#212121',
    secondary: '#757575',
    light: '#ffffff',
    bgc: 'rgba(117, 117, 117, 0.4)',
    border: 'rgba(117, 117, 117, 0.2)',
    secondaryBgc: 'rgb(240, 240, 240)',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    circle: '50%',
  },
  spacing: value => `${value * 4}px`,
  shadow:
    '1px 4px 6px 0px rgba(0, 0, 0, 0.16), 0px 4px 4px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <PersistGate loading={null} persistor={persistor}>
            <HelmetProvider>
              <App />
            </HelmetProvider>
          </PersistGate>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
