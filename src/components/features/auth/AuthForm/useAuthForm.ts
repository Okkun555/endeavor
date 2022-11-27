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
      return true;
    } catch (e) {
      console.error(e);
      return false;
    } finally {
      endLoading();
    }
  }, []);

  const postLogin = useCallback(async (email: string, password: string) => {
    try {
      startLoading();
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (e) {
      console.error(e);
      return false;
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
