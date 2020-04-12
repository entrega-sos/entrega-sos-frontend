import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';
import Favicon from 'react-favicon';

import Logo from './assets/EntregaSOS-logo.png';

import Header from './components/Header';

import './config/ReactotronConfig';

import Routes from './routes';

import store from './store';

import GlobalStyles from './styles/global';
import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
        <Favicon url={Logo} />
      </Router>
    </Provider>
  );
}

export default App;
