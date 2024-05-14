import { RouterProvider } from 'react-router-dom';

import { defaultRouter } from './routes/router';
import AuthProvider from 'react-auth-kit';
import createStore from 'react-auth-kit/createStore';

export function App() {
  const store = createStore({
    authName: '_auth',
    authType: 'cookie',
    cookieDomain: window.location.hostname,
    cookieSecure: false,
  });

  return (
    <AuthProvider store={store}>
      <RouterProvider router={defaultRouter} />
    </AuthProvider>
  );
}
