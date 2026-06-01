import React from 'react'
import { RiGlobalLine } from '@remixicon/react';
const Bottom = () => {

var span = document.getElementById("span");

// function time() {
//   var d = new Date();
//   var s = d.getSeconds();
//   var m = d.getMinutes();
//   var h = d.getHours();
//   span.textContent =
//     ("0" + h).substr(-2) +
//     ":" +
//     ("0" + m).substr(-2) +
//     ":" +
//     ("0" + s).substr(-2);
// }

// setInterval(time, 1000);


  return (
    <div className="">
      <div className="flex text-white text-[1.3vw] font-[font2] items-center absolute bottom-0 left-0 selection:bg-[#D3FD50] selection:text-black">
        <h2 className="flex items-center gap-2">
          <RiGlobalLine size={38} /> MONTREAL_
        </h2>
        <div className="timeline" id="span">
          time
        </div>
      </div>
      <div className=" w-[19vw] absolute right-0 bottom-40 text-white font-[font2]  selection:bg-[#D3FD50] selection:text-black ">
        <p className="text-sm leading-5">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72 est
          une agence qui pense chaque action pour nourrir la marque. Demain,
          dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle
          pour générer de l’émotion. Pour assurer une relation honnête, on est
          sans filtre, on dit ce qui doit être dit, on fait ce qui doit être
          fait.
        </p>
      </div>

      <div className="text-[6.5vw] text-white flex justify-center font-[font2] gap-4 pb-4">
        <div className="border-3 h-[6vw] px-10 flex items-center pt-4 rounded-full overflow-hidden select-none hover:text-[#D3FD50]">
          <a href="/projects">PROJETS</a>
        </div>
        <div className="border-3 h-[6vw] px-10 flex items-center pt-4  rounded-full select-none hover:text-[#D3FD50]">
          <a href="/agence">AGENCE</a>
        </div>
      </div>
    </div>
  );
}

export default Bottom
