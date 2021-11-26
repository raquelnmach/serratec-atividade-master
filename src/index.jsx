import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, useRoutes } from "react-router-dom";
import Navbar from './components/Navbar';
import App from './components/App';
import { AlunoProvider } from './context/index';

ReactDOM.render(
  <React.StrictMode>
    <AlunoProvider>
    <BrowserRouter>
      <Navbar />
        <App />
     </BrowserRouter>
    </AlunoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
