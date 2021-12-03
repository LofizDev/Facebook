import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './languages/i18n'
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import DataProvider from './redux/store'


ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

