import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RoutesApp } from '../routes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const App = () => (
  <div>
    <ToastContainer />
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  </div>
);
