import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouteAuthGuard from './RouteAuthGuard';
import NotFound from '../components/pages/NotFound/NotFound';
import SignIn from '../components/pages/SignIn/SignIn';
import Top from '../components/pages/Top/Top';
import TrainingHistory from '../components/pages/TrainingHistory/TrainingHistory';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route
          path="/training/history"
          element={
            <RouteAuthGuard component={<TrainingHistory />} redirect={'/'} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
