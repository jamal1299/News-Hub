import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from './components/ContextForSearch';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <SearchProvider>
      <App />
     
    </SearchProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
