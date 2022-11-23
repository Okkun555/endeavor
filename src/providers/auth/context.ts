import { createContext } from 'react';

export const AuthContext = createContext(
  {} as {
    /** ログイン状態 */
    isLoggedIn: boolean;
  }
);
