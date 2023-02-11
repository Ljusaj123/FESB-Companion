import React, { useState, useEffect } from "react";
import Lecture from "../../components/lecture/Lecture";
import Popup from "../popup/Popup";
import { schedule } from "../../const/lectures.js";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Lectures({ route }) {
  const location = useLocation();

  // get userId
  const { accessToken } = location.state;

  const [trigger, setTrigger] = useState(false);
  const [lectures, setLectures] = useState([schedule]);
  const [lecture, setLecture] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:4200/scheduletoday", {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        setLectures(response.data.todaySchedule.kolegiji);
        console.log(response);
      });
  }, [accessToken]);

  const handleClick = (lecture) => {
    setTrigger(true);
    setLecture(lecture);
  };

  return (
    <div className="lectures">
      {console.log(accessToken)}
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
