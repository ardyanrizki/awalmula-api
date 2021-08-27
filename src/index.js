import React from 'react';
import ReactDOM from 'react-dom';
import { ModalProvider } from "react-simple-modal-provider";
import modals from './components/Modal'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store/store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <ModalProvider value={[modals]}>
      <App />
    </ModalProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
