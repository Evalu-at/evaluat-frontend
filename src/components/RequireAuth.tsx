import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '@/hooks/UseAuth';

interface RequireAuthProps {
  roles: string[];
}

const RequireAuth: React.FC<RequireAuthProps> = ({ roles }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!roles.includes(user.role)) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default RequireAuth;
