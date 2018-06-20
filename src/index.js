import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";

import { Provider } from 'react-redux';
import configureStore from './store/ConfigureStore';
const store = configureStore();
import './index.css';


ReactDOM.render( 
    <Provider store={store}>
      <App />
  </Provider>, document.getElementById('root'));
