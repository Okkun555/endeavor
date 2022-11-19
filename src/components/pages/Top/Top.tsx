import reactLogo from '../../../assets/react.svg'; // TODO: 画像は差し替える
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import LinkButton from '../../ui/LinkButton/LinkButton';

// TODO: ボタンカラーは後ほど調整
const Top = () => {
  const navigate = useNavigate();

  const linkToSignIn = () => navigate('/sign-in');
  const linkToLogin = () => navigate('/login');

  return (
    <Container
      fluid="lg"
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ width: '100vw', height: '90vh' }}
    >
      <h1 className="fs-1" style={{ marginBottom: '48px' }}>
        Your Training History
      </h1>
      <div style={{ marginBottom: '48px' }}>
        <img src={reactLogo} alt="" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div className="mb-3">
          <LinkButton
            text="初めての方はこちら"
            color="primary"
            size="lg"
            onClickLink={linkToSignIn}
          />
        </div>
        <LinkButton
          text="アカウントをお持ちの方はこちら"
          color="primary"
          size="lg"
          onClickLink={linkToLogin}
        />
      </div>
    </Container>
  );
};

export default Top;
