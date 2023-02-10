import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BiUser, BiShareAlt } from "react-icons/bi";

function Login() {
  return (
    <div className="login">
      <div className="icon-holder">
        <FaFacebookF />
      </div>

      <div className="input-holder">
        <div class="username">
          <BiUser className="icon" />
          <input type="text" placeholder="FESB korisnički račun" />
        </div>

        <div class="password">
          <BiShareAlt className="icon" />
          <input type="password" placeholder="Lozinka" />
        </div>
      </div>

      <div className="button-holder">
        <button className="btn btn-color">Prijavi se</button>
        <span>Pomoć</span>
      </div>
    </div>
  );
}

export default Login;
