import { createContext, useState, ReactNode } from 'react';

type User = {
  email: string;
  token: string;
  role: string;
};

type AuthContextType = {
  user?: User;
  setUser?: React.Dispatch<React.SetStateAction<User | undefined>>;
};

const AuthContext = createContext<AuthContextType>({});
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
