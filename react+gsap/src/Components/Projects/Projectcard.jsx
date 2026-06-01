import React from "react";

const a = "/Projetimages/Thumbnail.png";
const b = "/Projetimages/2.jpg";
const c = "/Projetimages/3.jpg";
const d = "/Projetimages/4.jpg";
const e = "/Projetimages/5.jpg";
const f = "/Projetimages/6.jpg";
const g = "/Projetimages/7.jpg";
const h = "/Projetimages/8.jpg";
const i = "/Projetimages/9.jpg";
const j = "/Projetimages/10.jpg";
const k = "/Projetimages/11.jpg";
const l = "/Projetimages/12.jpg";
const m = "/Projetimages/13.jpg";
const n = "/Projetimages/14.jpg";
const o = "/Projetimages/15.jpg";
const p = "/Projetimages/16.jpg";
const q = "/Projetimages/17.jpg";
const Projectcard = (props) => {
  return (
    <>
      <div className=" card-1 w-1/2 h-full bg-blue-800 hover:rounded-[40px] duration-200 transition-all cursor-pointer overflow-hidden group relative">
        {/* <div className="w-full h-full bg-black/30 z-10 absolute opacity-0 group-hover:opacity-100 "></div> */}
        <div className="nav-hero hidden group-hover:block transition-all duration-200">
          <div className="w-full h-[3.3vw] bg-white fixed z-9 top-0"></div>
          <div className="w-full h-[3.9vw] z-9 bg-white fixed top-12.5 flex justify-around text-black font-[font1] text-3xl items-center uppercase border-y-2 border-black">
            <div>Lorem, ipsum.</div>
            <div>Lorem, ipsum.</div>
            <div>Lorem, ipsum.</div>
          </div>
        </div>
        <img
          className="h-full w-full group-hover:scale-105 duration-200 hover:bg-black/50 object-cover "
          src={props.image1}
          alt=""
        />
        <div className="opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/30">
          <h2 className="  uppercase text-6xl font-[font1] border-2 pt-4 px-4 text-white border-white  rounded-full leading-[0.8] ">
            voir le projet
          </h2>
        </div>
      </div>
      <div className=" card-2 w-1/2 h-full bg-blue-800 hover:rounded-[40px] duration-200 transition-all cursor-pointer overflow-hidden group relative">
        {/* <div className="w-full h-full bg-black/30 z-10 absolute opacity-0 group-hover:opacity-100 "></div> */}
        <div className="nav-hero hidden group-hover:block transition-all duration-200">
          <div className="w-full h-[3.3vw] bg-white fixed z-9 top-0 left-0"></div>
          <div className="w-full h-[3.9vw] z-9 bg-white fixed top-12.5 left-0 flex justify-around text-black font-[font1] text-3xl items-center uppercase border-y-2 border-black">
            <div>Lorem, ipsum.</div>
            <div>Lorem, ipsum.</div>
            <div>Lorem, ipsum.</div>
          </div>
        </div>
        <img
          className="h-full w-full group-hover:scale-105 duration-200 hover:bg-black/50 object-cover "
          src={props.image2}
          alt=""
        />
        <div className="opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/30">
          <h2 className="  uppercase text-6xl font-[font1] border-2 pt-4 px-4 text-white border-white  rounded-full leading-[0.8] ">
            voir le projet
          </h2>
        </div>
      </div>

     
    </>
  );
};

export default Projectcard;
