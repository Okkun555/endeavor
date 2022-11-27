import { FC, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/auth/context';

type PropsType = {
  component: React.ReactNode;
  redirect: string;
};

const RouteAuthGuard: FC<PropsType> = (props) => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? (
    <>{props.component}</>
  ) : (
    <Navigate to={props.redirect} replace={false} />
  );
};

export default RouteAuthGuard;
