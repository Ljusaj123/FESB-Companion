import React from "react";

import { TbSettings } from "react-icons/tb";
import { AiOutlineReload } from "react-icons/ai";

function Header() {
  return (
    <header>
      <h1>FESB Companion</h1>
      <div className="icon-holder">
        <AiOutlineReload />
        <TbSettings />
      </div>
    </header>
  );
}

export default Header;
