import { createContext, useMemo, useState } from 'react';
import * as auth from '../services/auth'

const data = {
  signed: false,
  user: {},
  signIn: () => {},
}
const AuthContext = createContext(data);

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const signIn = async () => {
    const response = await auth.signIn();
    console.log(response);
    setUser(response.user);
  };

  const dataValue = useMemo(() => {
    return {
      signed: !!user,
      user,
      signIn,
    }
  }, [user]);

  return (
      <AuthContext.Provider value={dataValue}>
          {children}
      </AuthContext.Provider>
  );
};

export default AuthContext;