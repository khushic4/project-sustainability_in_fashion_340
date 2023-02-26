import React from 'react';
import ReactDOM from 'react-dom/client';
//css 
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './component/App';

import BRAND_INFO from './data/brandinfo.json'; //the data to display

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App brandInfo={BRAND_INFO}/>
  </React.StrictMode>
);
