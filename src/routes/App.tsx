import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouteAuthGuard from './RouteAuthGuard';
import NotFound from '../components/pages/NotFound/NotFound';
import SignIn from '../components/pages/SignIn/SignIn';
import Top from '../components/pages/Top/Top';
import TrainingHistory from '../components/pages/TrainingHistory/TrainingHistory';
import TrainingItemList from '../components/pages/TrainingItemList/TrainingItemList';
import Login from '../components/pages/Login/Login';
import TrainingItemRegister from '../components/pages/TrainingItemRegister/TrainingItemRegister';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        FIXME:
        ログイン済みの場合は本ページに遷移させない未ログインチェックガードを作成
        <Route path="/" element={<Top />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        {/* FIXME: ログイン後チェックのあるコンポーネントは一括で設定できるよう工夫したい */}
        <Route
          path="/training/history"
          element={
            <RouteAuthGuard component={<TrainingHistory />} redirect={'/'} />
          }
        />
        <Route
          path="/training/items"
          element={
            <RouteAuthGuard component={<TrainingItemList />} redirect={'/'} />
          }
        />
        {/* <Route
          path="/training/item"
          element={
            <RouteAuthGuard
              component={<TrainingItemRegister />}
              redirect={'/'}
            />
          }
        /> */}
        <Route path="/create" element={<TrainingItemRegister />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
