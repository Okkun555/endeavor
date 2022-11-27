import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useCallback, useState } from 'react';
import { auth } from '../../../../config/firebase';
import { AuthType } from '../types';

export const useAuthForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => setIsLoading(true);
  const endLoading = () => setIsLoading(false);

  const displayTitle = useCallback((type: AuthType) => {
    return type === 'signIn' ? 'Sign In' : 'Login';
  }, []);

  const postSignIn = useCallback(async (email: string, password: string) => {
    try {
      startLoading();
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.error(e);
      alert('アカウント作成に失敗しました');
    } finally {
      endLoading();
    }
  }, []);

  const postLogin = useCallback(async (email: string, password: string) => {
    try {
      startLoading();
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.error(e);
      alert('ログインに失敗しました');
    } finally {
      endLoading;
    }
  }, []);

  return {
    isLoading,
    displayTitle,
    postSignIn,
    postLogin,
  };
};
