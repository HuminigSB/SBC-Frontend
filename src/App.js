import React from 'react'
import {ToastContainer} from 'react-toastify';
import {Router} from 'react-router-dom'
import {Provider} from 'react-redux';

import Routes from './router/routes'
import GlobalStyle from './styles/global'
import history from './services/history'
import {store} from './store/index'

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
          <GlobalStyle />
          <ToastContainer autoClose={3000}/>
          <Routes/>
      </Router>
    </Provider>
  );
}

export default App;
