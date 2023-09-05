import React, { useContext, useEffect, useState } from "react";

import { Link, useHistory, history } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../AuthContext/AuthContext";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const { auth } = useContext(AuthContext);
  const history = useHistory();
  const goToLogin = () => {
    history.push("/login");
  };
  useEffect(() => {
    axios
      .get("http://localhost:3000/friends", {
        headers: {
          Authorization: auth.token,
        },
      })
      .then((res) => setFriends(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="header">
        <h1>FRIENDS DATABASE</h1>
        <div className="liste">
          <button onClick={goToLogin} class="c">
            LOGIN.
          </button>
          <h1></h1>
          <button>FRIENDLIST.</button>
          <h1></h1>
          <button>ADDFRIEND.</button>
          <h1></h1>
          <button>LOGOUT.</button>
        </div>
      </div>
      <hr />
      <h2 className="h2">FRIENDS LIST</h2>

      <h1 className="h1">-JOEY TRIBBIANI-JOEY@FREINDS.COM</h1>
    </div>
  );
};

export default FriendsList;
