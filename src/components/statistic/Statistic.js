import React from "react";

function Statistic({ subjectPresence }) {
  return (
    <div className="statistic">
      {subjectPresence.map((presence) => {
        return (
          <div className="subject-container" key={presence.id}>
            <h2 className="subject-type">{presence.type}</h2>
            <h2 className="subject-presence">
              <span className="presence-number">{presence.present}</span>/13
            </h2>
          </div>
        );
      })}
    </div>
  );
}

export default Statistic;
