import { defaultRouter } from './shared/router';
import {
  BrowserRouter as Router,
  RouterProvider,
  Routes,
} from 'react-router-dom';
export function App() {
  return <RouterProvider router={defaultRouter} />;
}
