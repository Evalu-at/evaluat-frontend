import { RouterProvider } from 'react-router-dom';

import { defaultRouter } from './routes/router';

export function App() {
  return <RouterProvider router={defaultRouter} />;
}
