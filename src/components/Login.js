import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { useHistory } from "react-router-dom";
import "../index.css";

const Login = () => {
  const [user, setUser] = useState({
    username: "Kadiraydn01",
    password: "herşeygüzelolacak",
  });

  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(user);
  };

  const history = useHistory();

  const goToFriendList = () => {
    history.push("/friends");
  };

  const goToLogin = () => {
    history.push("/login");
  };

  const logout = () => {
    history.push("/logout");
  };
  return (
    <div>
      <div className="header">
        <h1>FRIENDS DATABASE</h1>
        <div className="liste">
          <button onClick={goToLogin}>Login</button>
          <button onClick={goToFriendList}>Friends List</button>
          <button onClick={goToFriendList}>Add Friend</button>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
      <hr />
      <h2 className="login">LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div className="login-info">
          <label className="login-info">
            USERNAME
            <input type="text" />
          </label>

          <label className="login-info">
            PASSWORD
            <input type="password" />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Login;
