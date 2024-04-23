import { createBrowserRouter } from 'react-router-dom';

import { GridLayout } from '../layouts/GridLayout';
import { LoginPage } from '../pages/LoginPage';
import { PageNotFound } from '../pages/PageNotFound';
import { SignUpPage } from '../pages/SignUpPage';
import { ROUTES } from '../shared';

export const defaultRouter = createBrowserRouter([
  {
    element: <GridLayout />,
    errorElement: <PageNotFound />,
    children: [
      { path: ROUTES.LOGIN, element: <LoginPage /> },
      { path: ROUTES.SIGNUP, element: <SignUpPage /> },
    ],
  },
]);
