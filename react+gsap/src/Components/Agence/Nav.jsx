import React, { useContext } from "react";
import Logo2 from "../main/Logo2.jsx";
import { Navbarcontext } from "../../context/Navmenucontext.jsx";

const nav = () => {
  const [navOpen,setnavOpen]=useContext(Navbarcontext)
  return (
    <div className="w-full h-full flex justify-end  selection:bg-[#D3FD50] selection:text-black ">
      <a href="/projects">
        <div className="h-[3.5vw] w-[19.4vw] bg-black text-white font-[font2] uppercase flex items-end text-[1.2vw] group cursor-pointer">
          <div className="h-[3.5vw] w-[19.4vw] absolute -top-16 bg-[#D3FD50] flex items-end group-hover:top-0 duration-200  transition-all ease-in-out"></div>
          <h2 className="pl-3 z-2 group-hover:text-black">projets(17)</h2>
        </div>
      </a>
      <a href="/agence">
        <div className="h-[6vw] w-[30vw] bg-black text-white font-[font2] uppercase flex items-end text-[1.3vw] group cursor-pointer">
          <div className="h-[6vw] w-[30vw] absolute -top-24 bg-[#D3FD50] flex items-end group-hover:top-0 duration-200  transition-all ease-in-out"></div>
          <h2 className="pl-3 z-2 group-hover:text-black">Agence</h2>
        </div>
      </a>
      <div
        className="h-full w-[14.9vw] bg-black text-white font-[font2] uppercase flex items-end text-[1.3vw] group cursor-pointer "
        onClick={() => {
          setnavOpen(true);
        }}
      >
        <div className="h-full w-full absolute -top-35 bg-[#D3FD50] flex items-end group-hover:top-0 duration-200  transition-all ease-in-out"></div>
        <div className="w-12 h-0.5 bg-gray-100 absolute top-5.5 right-6 group-hover:bg-black"></div>
        <div className="w-6 h-0.5 bg-gray-100 absolute top-7 right-6 group-hover:bg-black"></div>
        <h2 className="pl-3 group-hover:text-black z-2">Menu</h2>
      </div>
    </div>
  );
};

export default nav;
