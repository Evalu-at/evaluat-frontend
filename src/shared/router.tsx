import { createBrowserRouter, Outlet } from 'react-router-dom';
import { ROUTES } from '../routes/routes';
import { GridLayout } from '@/layouts/GridLayout';
import { PageNotFound } from '@/pages/PageNotFound';
import { LoginPage } from '@/pages/LoginPage';
import { SignUpPage } from '@/pages/SignUpPage';
import { OtpPage } from '@/pages/OtpPage';

export const defaultRouter = createBrowserRouter([
  {
    element: <GridLayout />, // Pass Outlet as a prop to GridLayout
    errorElement: <PageNotFound />,
    children: [
      { path: ROUTES.LOGIN, element: <LoginPage /> }, // Assuming you have a HomePage component
      { path: ROUTES.SIGNUP, element: <SignUpPage /> },
      { path: ROUTES.TFPAGE, element: <OtpPage /> },
    ],
  },
]);
