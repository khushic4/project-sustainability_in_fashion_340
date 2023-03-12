import React from 'react';
import ReactDOM from 'react-dom/client';
import 'whatwg-fetch';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './component/App';
import { BrowserRouter } from 'react-router-dom';

// //AJAX TEMPLATE CODE
// const url = "https:www...";
// console.log("about to send request");

// const aPromise = fetch (url)
//   aPromise.then(function(response) {
//     console.log(response);
//   })
//   const dataPromise = response.json()

//   dataPromise.then(function(data) {
//     console.log(data);
//   })
// //AJAX TEMPLATE CODE


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
