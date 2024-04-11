import { Link } from 'react-router-dom';
export function PageNotFound() {
  return (
    <h1 className="flex flex-col gap-2">
      404 PageNotFound
      <Link to="/login">Go to Login</Link>
    </h1>
  );
}
