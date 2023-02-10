import React from "react";

function Popup() {
  return (
    <div className="popup">
      <p>Želite li nastaviti sa evidencijom predmeta:</p>
      {/* ovo je dinamično */}
      <p className="uppercase">Multimedijski sustavi</p>

      <div className="buttons-holder">
        <button class="btn btn-empty">Odustani</button>
        <button class="btn btn-color">Evidentiraj</button>
      </div>
    </div>
  );
}

export default Popup;
