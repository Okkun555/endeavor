import { FC } from 'react';
import './AuthForm.css';
import { SubmitHandler, useForm } from 'react-hook-form';

import { AuthType } from '../types';
import SubmitButton from '../../../ui/SubmitButton/SubmitButton';
import { useDevice } from '../../../../hooks/useDevice';
import { useAuthForm } from './useAuthForm';
import { useNavigate } from 'react-router-dom';
import { REQUIRE_MESSAGE } from '../../../../config/message';

type PropsType = {
  formType: AuthType;
};

type InputsType = {
  email: string;
  password: string;
};

const AuthForm: FC<PropsType> = ({ formType }) => {
  const navigate = useNavigate();
  const { isMobile } = useDevice();
  const { isLoading, displayTitle, postSignIn, postLogin } = useAuthForm();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputsType>({
    mode: 'onSubmit',
    defaultValues: { email: '', password: '' },
  });

  const onSubmit: SubmitHandler<InputsType> = async ({ email, password }) => {
    const responseStatus =
      formType === 'signIn'
        ? await postSignIn(email, password)
        : await postLogin(email, password);

    if (responseStatus) {
      reset();
      navigate('/training/history');
      return;
    }

    // TODO: 失敗原因の特定がしにくい点が課題
    alert('認証に失敗しました');
  };

  return (
    <div className="auth-form-container">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={isMobile ? 'auth-form-mobile' : 'auth-form'}
      >
        <div className="auth-form-content">
          <h3 className="auth-form-title">{displayTitle(formType)}</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              {...register('email', {
                required: `メールアドレス${REQUIRE_MESSAGE}`,
              })}
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
            <p className="text-danger mt-2 mb-0" style={{ fontSize: '12px' }}>
              {errors.email?.message}
            </p>
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              {...register('password', {
                required: 'パスワードを入力してください',
                minLength: { value: 6, message: '6文字以上入力してください' },
              })}
              type="password"
              className="form-control mt-1"
              placeholder="Enter Password"
            />
            <p className="text-danger mt-2 mb-0" style={{ fontSize: '12px' }}>
              {errors.password?.message}
            </p>
          </div>
          <div className="d-grid gap-2 mt-4">
            <SubmitButton
              text={displayTitle(formType)}
              size="sm"
              color="primary"
              isLoading={isLoading}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
