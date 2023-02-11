import React from "react";

function Popup({ trigger, setTrigger, lecture }) {
  const handlePresence = () => {
    alert("Evidentirani ste");
    setTrigger(false);
  };
  if (trigger) {
    return (
      <div className="popup-holder">
        <div className="popup">
          <p>Želite li nastaviti sa evidencijom predmeta:</p>
          {/* ovo je dinamično */}
          <p className="uppercase">{lecture.name}</p>

          <div className="buttons-holder">
            <button className="btn btn-empty" onClick={() => setTrigger(false)}>
              Odustani
            </button>
            <button className="btn btn-color" onClick={() => handlePresence()}>
              Evidentiraj
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
