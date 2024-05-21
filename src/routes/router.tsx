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
import AlunoPage from '@/pages/AlunoPage';

export const defaultRouter = createBrowserRouter([
  {
    element: <GridLayout />,
    errorElement: <PageNotFound />,

    children: [
      {
        element: <RequireAuth roles={['Aluno', 'Coordenador']} />,
        children: [{ path: ROUTES.DASHBOARD, element: <Dashboard /> }],
      },
      {
        element: <RequireAuth roles={['Coordenador']} />,
        children: [
          { path: ROUTES.HOME_COORDENADOR, element: <HomeCoordenador /> },
        ],
      },
      {
        element: <RequireAuth roles={['Aluno']} />,
        children: [{ path: ROUTES.ALUNOPAGE, element: <AlunoPage /> }],
      },
      { path: ROUTES.LOGIN, element: <LoginPage /> },
      { path: ROUTES.SIGNUP, element: <SignUpPage /> },
      { path: ROUTES.OTP, element: <OtpPage /> },
    ],
  },
]);
