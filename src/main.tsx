import React from 'react';
import ReactDOM from 'react-dom/client';
import './input.css';
import { App } from './App';
import { LoginPage } from './pages/loginPage';
import { SignUpPage } from './pages/signUpPage';
import { PageNotFound } from './pages/pageNotFound';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
