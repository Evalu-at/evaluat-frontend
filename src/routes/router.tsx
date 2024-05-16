import { createBrowserRouter } from 'react-router-dom';

import { GridLayout } from '../layouts/GridLayout';
import { HomeCoordenador } from '../pages/HomeCoordenador';
import { LoginPage } from '../pages/LoginPage';
import { OtpPage } from '../pages/OtpPage';
import { PageNotFound } from '../pages/PageNotFound';
import { SignUpPage } from '../pages/SignUpPage';
import RequireAuth from '../components/RequireAuth';
import { ROUTES } from '../shared';
import { Dashboard } from '../pages/Dashboard';

export const defaultRouter = createBrowserRouter([
  {
    element: <GridLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        element: <RequireAuth />,
        children: [{ path: ROUTES.DASHBOARD, element: <Dashboard /> }],
      },
      { path: ROUTES.LOGIN, element: <LoginPage /> },
      { path: ROUTES.SIGNUP, element: <SignUpPage /> },
      { path: ROUTES.OTP, element: <OtpPage /> },
      { path: ROUTES.HOME_COORDENADOR, element: <HomeCoordenador /> },
    ],
  },
]);
