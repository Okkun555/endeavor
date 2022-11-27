import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import { AuthContext } from '../providers/auth/context';
import { guestRoutes } from './GuestRoutes';
import { memberRoutes } from './MemberRoutes';

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? (
    <RouterProvider router={memberRoutes} />
  ) : (
    <RouterProvider router={guestRoutes} />
  );
};

export default App;
