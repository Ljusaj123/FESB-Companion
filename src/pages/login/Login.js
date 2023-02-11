import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { BiUser, BiShareAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (!username || !password) {
      alert("you need to enter username and password");
    } else {
      alert("You are loged in");
      navigate("/");
      setUsername("");
      setPassword("");
    }
  };
  return (
    <div className="login">
      <FaFacebookF className="icon-logo" />

      <form className="form">
        <div className="username">
          <BiUser className="input-icon" />
          <input
            type="text"
            placeholder="FESB korisnički račun"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="password">
          <BiShareAlt className="input-icon" />
          <input
            type="password"
            placeholder="Lozinka"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>

      <div className="button-holder">
        <button
          className="btn btn-color btn-login"
          type="submit"
          onClick={() => login()}
        >
          Prijavi se
        </button>
        <p className="help-text">Pomoć</p>
      </div>
    </div>
  );
}

export default Login;
