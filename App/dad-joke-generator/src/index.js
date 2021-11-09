import React from 'react';
import ReactDOM from 'react-dom';
import usePromiseTracker from 'react-promise-tracker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Main from './componants/heading';

ReactDOM.render(
    <Main />, 
    document.getElementById("root"));
reportWebVitals();
