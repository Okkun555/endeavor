import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/pages/Login/Login';
import SignIn from '../components/pages/SignIn/SignIn';
import Top from '../components/pages/Top/Top';

export const guestRoutes = createBrowserRouter([
  { path: '/', element: <Top /> },
  { path: '/sign-in', element: <SignIn /> },
  { path: '/login', element: <Login /> },
]);
