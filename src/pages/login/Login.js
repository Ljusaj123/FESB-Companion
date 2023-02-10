import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { BiUser, BiShareAlt } from "react-icons/bi";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (!username || !password) {
      alert("you need to enter username and password");
    } else {
      alert("You are loged in");
      setUsername("");
      setPassword("");
    }
  };
  return (
    <div className="login">
      <div className="icon-holder">
        <FaFacebookF />
      </div>

      <div className="input-holder">
        <div className="username">
          <BiUser className="icon" />
          <input
            type="text"
            placeholder="FESB korisnički račun"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="password">
          <BiShareAlt className="icon" />
          <input
            type="password"
            placeholder="Lozinka"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div className="button-holder">
        <button className="btn btn-color" type="submit" onClick={() => login()}>
          Prijavi se
        </button>
        <span>Pomoć</span>
      </div>
    </div>
  );
}

export default Login;
