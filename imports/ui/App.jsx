import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RoutesApp } from '../routes';


export const App = () => (
  <div>
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  </div>
);
