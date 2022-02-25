import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "../src/Assets/Style/style.css"
import reportWebVitals from './reportWebVitals';
import Order from "./Page/Order";

import rootReducer from "./Modules";
import {createStore} from "redux";
import {Provider} from "react-redux";
import ListContainer from "./Conatiners/ListContainer";


import { BrowserRouter } from 'react-router-dom';
//import {composeWithDevTools} from "redux-devtools-extension";//

const store=createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ListContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
