import { createBrowserRouter, Outlet } from 'react-router-dom';
import { ROUTES } from './routes';
import { GridLayout } from '@/layouts/gridLayout';
import { PageNotFound } from '@/pages/pageNotFound';
import { LoginPage } from '@/pages/loginPage';
import { SignUpPage } from '@/pages/signUpPage';

export const defaultRouter = createBrowserRouter([
  {
    element: <GridLayout Outlet={<Outlet />} />, // Pass Outlet as a prop to GridLayout
    errorElement: <PageNotFound />,
    children: [
      { path: ROUTES.LOGIN, element: <LoginPage /> }, // Assuming you have a HomePage component
      { path: ROUTES.SIGNUP, element: <SignUpPage /> },
    ],
  },
]);
