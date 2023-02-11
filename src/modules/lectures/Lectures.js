import React, { useState } from "react";
import Lecture from "../../components/lecture/Lecture";
import Popup from "../popup/Popup";
import { schedule } from "../../const/lectures.js";

export default function Lectures() {
  const [trigger, setTrigger] = useState(false);
  const [lectures, setLectures] = useState(schedule);
  const [lecture, setLecture] = useState({});

  const handleClick = (lecture) => {
    setTrigger(true);
    setLecture(lecture);
  };

  return (
    <div className="lectures">
      <h2 className="text-holder">
        <button className="btn--no-style">
          <h2>Evidentirano</h2>
        </button>
        <span> | </span>
        <button className="btn--no-style">
          <h2>Neevidentirano</h2>
        </button>
      </h2>
      <h2>Današnja predavanja</h2>

      {lectures.map((lecture, index) => {
        return (
          <button
            className="btn--no-style"
            onClick={() => handleClick(lecture)}
            key={index}
          >
            <Lecture lecture={lecture} />
          </button>
        );
      })}

      <Popup trigger={trigger} setTrigger={setTrigger} lecture={lecture} />
    </div>
  );
}
