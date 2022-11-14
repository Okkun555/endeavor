import { createBrowserRouter } from 'react-router-dom';
import Top from '../pages/Top/Top';

export const guestRoutes = createBrowserRouter([
  { path: '/', element: <Top /> },
]);
