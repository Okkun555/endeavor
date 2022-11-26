import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useCallback } from 'react';
import { auth } from '../../../../config/firebase';
import { AuthType } from '../types';

export const useAuthForm = () => {
  const displayTitle = useCallback((type: AuthType) => {
    return type === 'signIn' ? 'Sign In' : 'Login';
  }, []);

  const postSignIn = useCallback(async (email: string, password: string) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
    } catch (e) {
      console.error(e);
      alert('アカウント作成に失敗しました');
    }
  }, []);

  return {
    displayTitle,
    postSignIn,
  };
};
