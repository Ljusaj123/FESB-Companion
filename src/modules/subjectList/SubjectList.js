import React from "react";
import { subjects } from "./../../const/lectures";

function SubjectList() {
  return (
    <div className="list">
      <div className="list-title-container">
        <h2 className="list-title">PREDMETI</h2>
      </div>
      {subjects.map((subject) => {
        return (
          <div className="list-content-container" key={subject.id}>
            <h1 className="list-content">{subject.name}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default SubjectList;
