import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../components/pages/NotFound/NotFound';
import TrainingHistory from '../components/pages/TrainingHistory/TrainingHistory';

export const memberRoutes = createBrowserRouter([
  { path: '/training/history', element: <TrainingHistory /> },
  { path: '*', element: <NotFound /> },
]);
