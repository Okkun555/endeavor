import { ReactNode, useEffect, useState } from 'react';
import { AuthContext } from './context';
import { auth } from '../../config/firebase';

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const value = {
    isLoggedIn,
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        return;
      }

      setIsLoggedIn(true);
    });
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
