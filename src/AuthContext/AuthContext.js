import { createContext } from "react";
import { useHistory } from "react-router-dom";
import useLocalStorage from "../UseLocalStorage/UseLocalStorage";
import axios from "axios";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const { push } = useHistory();
  const [auth, setAuth] = useLocalStorage("Token", {});

  const logout = () => {
    setAuth({});
    push("/login");
  };
  const login = (credentials) => {
    axios
      .post("http://localhost:3000/login", credentials)
      .then((res) => setAuth(res.data))
      .catch((err) => console.log(err));
  };
  const isLoggedIn = auth && auth.token;

  return (
    <AuthContext.Provider value={{ auth, setAuth, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
