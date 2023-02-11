import React, { useState, useEffect } from "react";
import Lecture from "../../components/lecture/Lecture";
import Popup from "../popup/Popup";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Lectures() {
  const location = useLocation();

  const { accessToken } = location.state;

  const [trigger, setTrigger] = useState(false);
  const [lectures, setLectures] = useState([]);
  const [lecture, setLecture] = useState({});
  const [filtrirano, setFiltrirano] = useState([]);
  const [activeEvidentirano, setActiveEvidentirano] = useState(false);
  const [activeNeevidentirano, setActiveNeevidentirano] = useState(false);

  const handleNeevidentirano = () => {
    setFiltrirano([]);

    lectures.forEach((lecture) => {
      if (lecture.presence === false) {
        setFiltrirano((lec) => [...lec, lecture]);
      }
    });
    setActiveEvidentirano(false);
    setActiveNeevidentirano(true);
  };

  const handleEvidentirano = () => {
    setFiltrirano([]);
    lectures.forEach((lecture) => {
      if (lecture.presence === true) {
        setFiltrirano((evid) => [...evid, lecture]);
      }
    });
    setActiveEvidentirano(true);
    setActiveNeevidentirano(false);
  };

  useEffect(() => {
    async function FetchSchedule() {
      await axios
        .get("http://localhost:4200/scheduletoday", {
          headers: {
            Authorization: accessToken,
          },
        })
        .then((response) => {
          setLectures(response.data.todaySchedule.kolegiji);
          setFiltrirano(response.data.todaySchedule.kolegiji);
        });
    }

    FetchSchedule();
  }, [accessToken]);

  const handleClick = (lecture) => {
    setTrigger(true);
    setLecture(lecture);
  };

  return (
    <div className="lectures">
      <h2 className="text-holder">
        <button className="btn--no-style" onClick={() => handleEvidentirano()}>
          <h2 className={activeEvidentirano ? "active" : ""}>Evidentirano</h2>
        </button>
        <span> | </span>
        <button
          className="btn--no-style"
          onClick={() => handleNeevidentirano()}
        >
          <h2 className={activeNeevidentirano ? "active" : ""}>
            Neevidentirano
          </h2>
        </button>
      </h2>
      <h2>Današnja predavanja</h2>

      {lectures.length === 0 ? (
        <p className="text-center">Danas nemate obaveza</p>
      ) : filtrirano.length !== 0 ? (
        filtrirano.map((lecture, index) => {
          return (
            <button
              className="btn--no-style"
              onClick={() => handleClick(lecture)}
              key={index}
            >
              <Lecture lecture={lecture} />
            </button>
          );
        })
      ) : (
        <p className="text-center">
          Danas nema {activeEvidentirano ? "evidentiranih" : "neevidentiranih"}{" "}
          predmeta
        </p>
      )}

      <Popup trigger={trigger} setTrigger={setTrigger} lecture={lecture} />
    </div>
  );
}
