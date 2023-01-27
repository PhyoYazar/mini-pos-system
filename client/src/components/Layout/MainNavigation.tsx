import { Link } from 'react-router-dom';
import { getToken } from '../../services/auth';

const MainNavigation = () => {
  const token = getToken();

  return (
    <header className='bg-neutral200'>
      <div className='flex-between container py-6'>
        <Link to='/'>
          <div className=''>Logo</div>
        </Link>

        <nav className=''>
          <ul className='flex items-center space-x-10'>
            {token && (
              <Link to='/auth/my-bookings'>
                <li className=''>My Bookings</li>
              </Link>
            )}

            {token ? (
              <Link to='/auth/profile'>
                <li className=''>Profile</li>
              </Link>
            ) : (
              <Link to='/login'>
                <li className=''>Login</li>
              </Link>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
