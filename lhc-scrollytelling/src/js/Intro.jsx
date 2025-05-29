import { useState } from "react";
import "../css/Intro.css";

function Intro() {
  return (
    <>
      <div>
        <div>
          <h1 className="big-title main-title">MAKING THE INVISIBLE VISIBLE</h1>
        </div>
        <p>
          How new the Higgs Boson (and other particles) are discovered at Cern
        </p>
      </div>
      <div className="pt-2">
        <h1 className="big-title sub-title">
          Some particles, like the Higgs boson, do not exist naturally in our
          everyday world.
        </h1>
        <div className="img-main">
          <img
            className="floating-img"
            src="/assets/particles/pink/O_MAIN.png"
          />
        </div>
      </div>
    </>
  );
}

export default Intro;
