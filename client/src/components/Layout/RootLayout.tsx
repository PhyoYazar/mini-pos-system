import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { getToken } from '../../services/auth';

const isAuthenticated = getToken();
// const isAuthenticated = false;

const RootLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isAuthenticated) {
      if (pathname.includes('login')) {
        navigate('/', { replace: true });
      }
    } else {
      navigate('/login');
    }
  }, [isAuthenticated]);

  //   if (!isPending) return <Outlet />;
  if (true) return <Outlet />;

  return <div> Loading... </div>;
};

export default RootLayout;
