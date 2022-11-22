import { FC, useCallback } from 'react';
import './AuthForm.css';
import { AuthType } from '../types';
import SubmitButton from '../../../ui/SubmitButton/SubmitButton';
import { useDevice } from '../../../../hooks/useDevice';

type PropsType = {
  formType: AuthType;
};

const AuthForm: FC<PropsType> = ({ formType }) => {
  const { isMobile } = useDevice();

  const getFormTitle = useCallback(() => {
    return formType === 'signIn' ? 'Sign In' : 'Login';
  }, []);

  return (
    <div className="auth-form-container">
      <form className={isMobile ? 'auth-form-mobile' : 'auth-form'}>
        <div className="auth-form-content">
          <h3 className="auth-form-title">{getFormTitle()}</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter Password"
            />
          </div>
          <div className="d-grid gap-2 mt-4">
            <SubmitButton
              text={getFormTitle()}
              size="sm"
              color="primary"
              width={360}
              onClick={() => console.log('送信')}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
