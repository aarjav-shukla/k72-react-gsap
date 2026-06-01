import React from 'react'

import Video from './Video.jsx';
import { RiMenu3Line } from '@remixicon/react';
import { useContext } from 'react';
import { Navbarcontext } from '../../context/Navmenucontext.jsx';
const Top = () => {
const [navOpen,setnavOpen]=useContext(Navbarcontext)
console.log(navOpen)
  return (
    <div className="relative flex justify-center">
      <div className=" pt-3.5  text-center font-[font1] text-[9.5vw] text-white leading-[8.3vw] uppercase selection:bg-[#D3FD50] selection:text-black">
        <div className="">L'étincelle</div>
        <div className=" flex mt-2.5">
          qui
          <div className="h-[7vw] w-[16vw] rounded-full object-cover overflow-hidden select-none">
            <Video />
          </div>
          génère
        </div>
        <div>la créativité</div>
      </div>
      <div className="bg-black h-13 w-60 text-white flex justify-end absolute right-0 cursor-pointer group " onClick={()=>{setnavOpen(true)}} >
       
        <div className="h-full w-full bg-[#D3FD50] absolute -top-13 group-hover:top-0 duration-150  transition-all"></div>
        <div className="w-12 h-0.5 bg-gray-100 absolute top-5.5 right-6 group-hover:bg-black transition-all"></div>
        <div className="w-6 h-0.5 bg-gray-100 absolute top-7 right-6 group-hover:bg-black"></div>
       
      </div>
    </div>
  );
}

export default Top
