import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { getToken } from '../../services/auth';

const isAuthenticated = getToken();

const RootLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isAuthenticated) {
      if (pathname.includes('login')) {
        navigate('/', { replace: true });
      }
    } else {
      navigate('/login', { replace: true });
    }
  }, [isAuthenticated]);

  // if (loading) return <div> Loading... </div>;

  return <Outlet />;
};

export default RootLayout;
