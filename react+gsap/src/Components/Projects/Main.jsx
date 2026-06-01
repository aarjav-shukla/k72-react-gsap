import React, { useContext } from 'react'
import Nav from '../Agence/Nav.jsx';
import Projectcard from './Projectcard';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { Navbarcontext } from '../../context/Navmenucontext';
import { RiGlobalLine } from '@remixicon/react';
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
const Main = () => {
    const proetimage=[{image1:a,image2:b},{image1:c,image2:d},{image1:e,image2:f}
        ,{image1:g,image2:q},{image1:i,image2:j},{image1:k,image2:l},{image1:m,image2:n},{image1:o,image2:p}
        ]
    
const [navOpen,setnavOpen]=useContext(Navbarcontext);

gsap.registerPlugin(ScrollTrigger)
useGSAP((elem)=>{
    gsap.to([".agence-btn",".project-btn"],{
      height:0,
      stagger:{
        amount:-0.2,
      },
        scrollTrigger:{
            trigger:".lol",
            
            start:"top 50%",
            end:"top 35%",
            scrub:2
            

        }
    })
     gsap.to(".hola", {
       display: "none",
       scrollTrigger: {
         trigger: ".lol",
         
         start: "top 50%",
         end: "top 35%",
         scrub: 2,
       },
     });
     gsap.to(".menu-btn", {
       height: "50px",
       stagger: {
         amount: -0.2,
       },
       scrollTrigger: {
         trigger: ".lol",
         
         start: "top 50%",
         end: "top 35%",
         scrub: 2,
       },
     });
   
gsap.to(".cardcontainer", {
  height: "100px",
  stagger: {
    amount: 5,
  },
  scrollTrigger: {
    trigger: ".lol",
    start: "top 40%",
    
    end: "top -150%",
    scrub: 2,
  },
});
})



  return (
    <div className="main-scroll h-screen w-full ">
      <div className="nav h-[17vh] w-full overflow-x-hidden fixed z-10">
        <div className="w-full h-full flex justify-end  selection:bg-[#D3FD50] selection:text-black ">
          <a href="/projects">
            <div className="project-btn h-[3.5vw] w-[19.4vw] bg-black text-white font-[font2] uppercase flex items-end text-[1.2vw] group cursor-pointer">
              <div className="h-[3.5vw] w-[19.4vw] absolute -top-16 bg-[#D3FD50] flex items-end group-hover:top-0 duration-200  transition-all ease-in-out"></div>
              <h2 className="pl-3 z-2 group-hover:text-black">projets(17)</h2>
            </div>
          </a>
          <a className="hola" href="/agence">
            <div className="agence-btn h-[6vw] w-[30vw] bg-black text-white font-[font2] uppercase flex items-end text-[1.3vw] group cursor-pointer">
              <div className="h-[6vw] w-[30vw] absolute -top-24 bg-[#D3FD50] flex items-end group-hover:top-0 duration-200  transition-all ease-in-out"></div>
              <h2 className="pl-3 z-2 group-hover:text-black">Agence</h2>
            </div>
          </a>
          <div
            className="menu-btn h-full w-[14.9vw] bg-black text-white font-[font2] uppercase flex items-end text-[1.3vw] group cursor-pointer "
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
      </div>
      <div className="pt-[26vw] px-2 ">
        <h1 className="text-black font-[font2] text-[13vw] uppercase relative leading-[10vw]">
          projets <span className="text-4xl -top-4 absolute">17</span>
        </h1>
        <div className="lol  ">
          {proetimage.map(function (elem, idx) {
            return (
              <div key={idx} className="cardcontainer w-full  flex gap-3 mb-3 ">
                <Projectcard image1={elem.image1} image2={elem.image2} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="bottom-part h-100 flex items-center justify-between w-full bg-black">
        <div>
          <div className="flex text-white text-[1.3vw] font-[font2] items-center w-[20vw] selection:bg-[#D3FD50] selection:text-black">
            <h2 className="flex items-center gap-2">
              <RiGlobalLine size={38} /> MONTREAL_
            </h2>
            <div className="timeline" id="span">
              time
            </div>
          </div>
        </div>
        <div className="text-white flex gap-4 mb-3 uppercase font-[font2] text-[0.8vw] selection:bg-[#D3FD50] selection:text-black">
          <div className="hover:text-[#D3FD50] cursor-pointer">
            Politique de confidentialité
          </div>
          <div className="hover:text-[#D3FD50] cursor-pointer">
            Avis de confidentialité
          </div>
          <div className="hover:text-[#D3FD50] cursor-pointer">
            Rapport éthique
          </div>
          <div className="hover:text-[#D3FD50] cursor-pointer">
            options de convenment
          </div>
        </div>
        <div className=" flex uppercase font-font[2] text-[2.2vw] gap-2 group selection:bg-[#D3FD50] selection:text-black">
          <div className="w-[4.5vw] h-[2.5vw] text-white flex items-center justify-center rounded-full border-2 border-white text-center font-bold cursor-pointer hover:border-[#D3FD50] hover:text-[#D3FD50]">
            fb
          </div>
          <div className="w-[4.5vw] h-[2.5vw] text-white flex items-center justify-center rounded-full border-2 border-white text-center font-bold cursor-pointer hover:border-[#D3FD50] hover:text-[#D3FD50]">
            ig
          </div>
          <div className="w-[4.5vw] h-[2.5vw] text-white flex items-center justify-center rounded-full border-2 border-white text-center font-bold cursor-pointer hover:border-[#D3FD50] hover:text-[#D3FD50]">
            in
          </div>
          <div className="w-[4.5vw] h-[2.5vw] text-white flex items-center justify-center rounded-full border-2 border-white text-center font-bold cursor-pointer hover:border-[#D3FD50] hover:text-[#D3FD50]">
            be
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main
