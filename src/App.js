import "./App.css";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import FriendsList from "./components/FriendsList";
import Login from "./components/Login";
import Logout from "./components/Logout";
import AuthContextProvider from "./AuthContext/AuthContext";

function App() {
  const history = useHistory();
  const [htr, setHtr] = useState(window.location.href);

  const goToLogin = () => {
    history.push("/login");
    setHtr("");
  };
  return (
    <AuthContextProvider>
      <div>
        <div className="App">
          {htr == "http://localhost:3000/" ? (
            <button onClick={goToLogin}>LOGIN</button>
          ) : (
            ""
          )}
        </div>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/friends">
            <FriendsList />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
        </Switch>
      </div>
    </AuthContextProvider>
  );
}
export default App;
