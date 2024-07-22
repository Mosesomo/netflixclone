import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData, accessToken) => {
    console.log('Logging in user:', userData);
    setUser({ ...userData, accessToken });
  };

  const logout = () => {
    console.log('Logging out user');
    setUser(null);
  };

  const isAuthenticated = () => {
    console.log('Checking authentication status:', user);
    return user && user.accessToken;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
