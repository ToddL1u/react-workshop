import { createContext, useState } from "react";

export const AuthContext = createContext({
  isAuth: false,
  login: () => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const loginHandler = () => {
    setIsAuthenticated(true);
  };
  const logoutHandler = () => {
    setIsAuthenticated(false);
  };
  return (
    <AuthContext.Provider
      value={{
        isAuth: isAuthenticated,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
