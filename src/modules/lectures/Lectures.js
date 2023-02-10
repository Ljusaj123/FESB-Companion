import React from "react";
import Lecture from "../../components/lecture/Lecture";

export default function Lectures() {
  return (
    <div className="lectures uppercase">
      <div className="evidencija-text">
        <span>Evidentirano</span>
        <span> | </span>
        <span>Neevidentirano</span>
      </div>
      <h2>Današnja predavanja</h2>
      <Lecture />
      <Lecture />
      <Lecture />
    </div>
  );
}
