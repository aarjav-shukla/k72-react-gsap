import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
import Logo from "../main/Logo.jsx";

const Stair = (props) => {

const currentpath=useLocation().pathname;
const mainref=useRef(null);

  const divref = useRef(null);
  useGSAP(function () {
  
    const tl1 = gsap.timeline();
    tl1.to(divref.current, {
      display: "block",
    });
    tl1.from(".stair", {
      height: 0,
      stagger: {amount:-.25
      },
    });
    tl1.to(".stair", {
      y: "100%",
      stagger: { amount: -0.25 },
    });
    tl1.to(divref.current, {
      display: "none",
    },"-=.5");

    gsap.from(mainref.current,{
        opacity:0,
        delay:1.2,
        // scale:1.1,
        
    })
  },[currentpath]);


  return (
    <div>
        <Logo/>
      <div ref={divref} className="h-screen w-full fixed z-10 top-0">
        <div className="flex h-full w-full">
          <div className=" stair w-1/5 h-full bg-black"></div>
          <div className=" stair w-1/5 h-full bg-black"></div>
          <div className=" stair w-1/5 h-full bg-black"></div>
          <div className=" stair w-1/5 h-full bg-black"></div>
          <div className=" stair w-1/5 h-full bg-black"></div>
        </div>
      </div>
      <div ref={mainref}>{props.children}</div>
    </div>
  );
};

export default Stair;
