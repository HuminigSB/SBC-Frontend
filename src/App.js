import React from 'react'
import { PersistGate } from 'redux-persist/integration/react';
import {ToastContainer} from 'react-toastify';
import {Router} from 'react-router-dom'
import {Provider} from 'react-redux';

import Routes from './router/index'
import GlobalStyle from './styles/global'
import history from './services/history'
import {store, persistor} from './store/index'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
            <GlobalStyle />
            <ToastContainer autoClose={3000}/>
            <Routes/>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
