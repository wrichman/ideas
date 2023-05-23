import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './MyComponent';

ReactDOM.render(
  <React.StrictMode>
    <MyComponent name="John" />
  </React.StrictMode>,
  document.getElementById('root')
);
