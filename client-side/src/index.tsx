import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './theme/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);