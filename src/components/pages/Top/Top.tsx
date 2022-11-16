import { useNavigate } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton/LinkButton';

const Top = () => {
  const navigate = useNavigate();

  const linkToSignIn = () => navigate('/sign-in');
  const linkToLogin = () => navigate('/login');

  return (
    <>
      <h1>Your Training History</h1>
      <LinkButton
        text="初めての方はこちら"
        color="primary"
        onClickLink={linkToSignIn}
      />
      <LinkButton
        text="既にアカウントをお持ちの方はこちら"
        color="success"
        onClickLink={linkToLogin}
      />
    </>
  );
};

export default Top;
