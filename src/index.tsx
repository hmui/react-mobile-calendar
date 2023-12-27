import React from 'react';
import ReactDOM from 'react-dom';
import Examples from './examples/index';
import Test from './examples/Test';
import './style/reset.css';

ReactDOM.render(
  <React.StrictMode>
    <Examples></Examples>
    <div>----------------------------------------</div>
    <Test />
  </React.StrictMode>,
  document.getElementById('root')
);
