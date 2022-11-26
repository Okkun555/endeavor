import { useCallback } from 'react';
import { AuthType } from '../types';

export const useAuthForm = () => {
  const displayTitle = useCallback((type: AuthType) => {
    return type === 'signIn' ? 'Sign In' : 'Login';
  }, []);

  return {
    displayTitle,
  };
};
