import React from "react";
import { useNavigate } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { GoCalendar } from "react-icons/go";
import { FiClock } from "react-icons/fi";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer>
      <BiHomeAlt onClick={() => navigate("/")} />
      <GoCalendar onClick={() => navigate("/calendar")} />
      <FiClock onClick={() => navigate("/presence")} />
    </footer>
  );
}

export default Footer;
