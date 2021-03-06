import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Movies from "./Components/Movies";
import reportWebVitals from './reportWebVitals';
import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css";


ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Movies /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
