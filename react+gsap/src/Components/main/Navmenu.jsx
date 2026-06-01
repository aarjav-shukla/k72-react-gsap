import React, { useContext, useRef, useState } from "react";
import Logo from "./Logo.jsx";
import Logo3 from "./Logo3.jsx"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RiServiceFill } from "@remixicon/react";
import { RiGlobalLine } from "@remixicon/react";
import { RiCloseLargeFill } from "@remixicon/react";
import Navmenucontext, { Navbarcontext } from "../../context/Navmenucontext.jsx";
gsap.registerPlugin(useGSAP);
const Navmenu = () => {

  const mainDiv = useRef(null);
  const marquee = useRef(null);
  const [hovered, setHovered] = useState(false);
  const agencemarquee = useRef(null);
    const [agencyHovered, setAgencyHovered] = useState(false);
    const contactmarquee = useRef(null);
    const [contactHovered, setContactHovered] = useState(false);
    const bloguemarquee = useRef(null);
    const [blogueHovered, setBlogueHovered] = useState(false);
  useGSAP(() => {
    if (hovered) {
      gsap.from(marquee.current, {
        y: -150,
        backgroundColor: "#D3FD50",
        duration: 0.2,
      });
      gsap.to(marquee.current, {
        backgroundColor: "#D3FD50",
        y: 0,
        duration: 0.2,
      });
      document.querySelector(".main-text").classList.add("opacity-0");
      document.querySelector(".moveX").classList.remove("opacity-0");
    } else {
      document.querySelector(".moveX").classList.add("opacity-0");
      gsap.to(marquee.current, {
        y: -150,
        backgroundColor: "transparent",
      });
      document.querySelector(".main-text").classList.remove("opacity-0");
    }
  }, [hovered]);
  useGSAP(() => {
    if (agencyHovered) {
      gsap.from(agencemarquee.current, {
        y:-150,
        backgroundColor: "#D3FD50",
        duration: 0.2,
      });
      gsap.to(agencemarquee.current, {
        backgroundColor: "#D3FD50",
        y: 0,
        duration: 0.2,
      });
      document.querySelector(".main-text-1").classList.add("opacity-0");
      document.querySelector(".moveX1").classList.remove("opacity-0");
    } else {
      document.querySelector(".moveX1").classList.add("opacity-0");
      gsap.to(agencemarquee.current, {
        y: -150,
        backgroundColor: "transparent",
      });
      document.querySelector(".main-text-1").classList.remove("opacity-0");
    }
  }, [agencyHovered]);
    useGSAP(() => {
      if (contactHovered) {
        gsap.from(contactmarquee.current, {
          y: -150,
          backgroundColor: "#D3FD50",
          duration: 0.2,
        });
        gsap.to(contactmarquee.current, {
          backgroundColor: "#D3FD50",
          y: 0,
          duration: 0.2,
        });
        document.querySelector(".main-text-2").classList.add("opacity-0");
        document.querySelector(".moveX2").classList.remove("opacity-0");
      } else {
        document.querySelector(".moveX2").classList.add("opacity-0");
        gsap.to(contactmarquee.current, {
          y: -150,
          backgroundColor: "transparent",
        });
        document.querySelector(".main-text-2").classList.remove("opacity-0");
      }
    }, [contactHovered]);
  useGSAP(() => {
         if (blogueHovered) {
           gsap.from(bloguemarquee.current, {
             y: -150,
             backgroundColor: "#D3FD50",
             duration: 0.2,
           });
           gsap.to(bloguemarquee.current, {
             backgroundColor: "#D3FD50",
             y: 0,
             duration: 0.2,
           });
           document.querySelector(".main-text-3").classList.add("opacity-0");
           document.querySelector(".moveX3").classList.remove("opacity-0");
         } else {
           document.querySelector(".moveX3").classList.add("opacity-0");
           gsap.to(bloguemarquee.current, {
             y: -150,
             backgroundColor: "transparent",
           });
           document.querySelector(".main-text-3").classList.remove("opacity-0");
         }
}, [blogueHovered]);




const [navOpen, setnavOpen] = useContext(Navbarcontext);


//stair animation

const mainref = useRef(null);

const divref = useRef(null);


function gsapanimation(){
   const tl1 = gsap.timeline();

   tl1.fromTo(
     ".stairing",
     {
      //  delay:1,
       height: 0,
       stagger: { amount: -0.2 },
     },
     {
       height: "100%",
       stagger: { amount: -0.2 },
     },
   );

   tl1.from(mainref.current, {
     opacity: 0,
    //  delay: 0.5,
     // scale:1.1,
   });
   tl1.fromTo(
     ".link",
     {
       opacity: 0,
       //  duration: 0.3,
       rotateX: 90,
      //  stagger: 0.25,
     },
     {
       opacity: 1,
       rotateX: 0,
       stagger: {
         amount: 0.3,
       },
     },
     "-=0.7",
   );
   
}
function reversegsapanimation() {
  const tl1 = gsap.timeline();
       tl1.fromTo(".link",{
         
       opacity: 1,
       rotateX: 0,
       stagger: {

       },
     
       }, {
         opacity: 0,
         rotateX: 90,
         stagger: {
           amount: 0.2,
         },
       });
tl1.fromTo(
  ".stairing",
  { height: "100%" },
  { height: 0, stagger: { amount: -0.3 } },"-=0.4"
);
 tl1.to(".fullscreennav", {
   display: "none",
 },"-=0.6");

  // tl1.from(mainref.current, {
  //   opacity: 0,
  //   delay: 0.5,
  //   // scale:1.1,
  // });
  // tl1.from(".link", {
  //   opacity: 0,
  //   duration: 0.3,
  //   rotateX: 90,
  //   stagger: 0.1,
  // });
}
useGSAP(
  function () {
   
     
     if(navOpen){
      // divref.current.classList.remove("hidden")
     gsap.to(".fullscreennav",{
      display:"block"
     })
      // 
      gsapanimation()
     }
     else{
    
    reversegsapanimation()
     }
  },[navOpen]
 

);


//use context



  return (
    <div
      ref={divref}
      className="fullscreennav hidden h-screen w-full absolute z-50 overflow-hidden"
    >
      <Logo3/>
      

      <div className="h-screen w-full fixed overflow-hidden">
        <div className="flex h-screen w-full">
          <div className=" stairing w-1/5 h-full bg-black"></div>
          <div className=" stairing w-1/5 h-full bg-black"></div>
          <div className=" stairing w-1/5 h-full bg-black"></div>
          <div className=" stairing w-1/5 h-full bg-black"></div>
          <div className=" stairing w-1/5 h-full bg-black"></div>
        </div>
      </div>

      <div
        ref={mainref}
        className="h-screen w-full flex flex-col items-center justify-between overflow-hidden relative"
      >
        <div className="top-part flex items-start justify-between w-full ">
          <div className="text-white ml-40 pt-2 font-[font1] cursor-pointer hover:text-[#D3FD50]">
            FR&nbsp;&nbsp; /&nbsp;&nbsp;EN
          </div>
          <div
            className="group relative p-15 cursor-pointer"
            onClick={() => {
              setnavOpen(false);
            }}
          >
            {" "}
            <div className="w-[9vw] h-0.5 bg-white rotate-45 absolute top-15 right-0 group-hover:bg-[#D3FD50] duration-200"></div>
            <div className="w-[9vw] h-0.5 bg-white -rotate-45 absolute top-15 right-0 group-hover:bg-[#D3FD50] duration-200"></div>
          </div>
        </div>
        <div className="middle-part w-full h-3/5 text-center mb-12 select-none">
          <a href="/projects">
            <div
              className=" link text-white h-1/4 w-full text-[8vw] text-center uppercase font-[font2] relative overflow-hidden border-t border-white pt-3  cursor-pointer"
              onMouseEnter={() => {
                setHovered(true);
              }}
              onMouseLeave={() => {
                setHovered(false);
              }}
            >
              <h2 className="leading-25 main-text">Projets</h2>
              <div
                className="h-full w-full bg-transparent absolute top-0 "
                ref={marquee}
              ></div>
              <div className=" items-center absolute top-0 moveX  flex leading-25 opacity-0 text-black pt-3">
                <h2 className="whitespace-nowrap ">Pour Tout voir</h2>
                <img
                  className="w-[15vw] rounded-full object-cover h-[12vh] shrink-0"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap ">Pour Tout voir</h2>
                <img
                  className="w-[15vw] rounded-full object-cover h-[12vh] shrink-0"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap ">Pour Tout voir</h2>
                <img
                  className="w-[15vw] rounded-full object-cover h-[12vh] shrink-0"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap ">Pour Tout voir</h2>
                <img
                  className="w-[15vw] rounded-full object-cover h-[12vh] shrink-0"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </a>
          <a href="/agence">
            {" "}
            <div
              className="link text-white h-1/4 w-full text-[8vw] text-center uppercase font-[font2] relative overflow-hidden border-t border-white pt-3 cursor-pointer"
              onMouseEnter={() => {
                setAgencyHovered(true);
              }}
              onMouseLeave={() => {
                setAgencyHovered(false);
              }}
            >
              <h2 className="leading-25 main-text-1">agence</h2>
              <div
                className="h-full w-full bg-transparent absolute top-0 "
                ref={agencemarquee}
              ></div>
              <div className=" items-center absolute top-0 moveX1  flex leading-25 opacity-0 text-black pt-3">
                <h2 className="whitespace-nowrap ">Pour Tout savoir</h2>
                <img
                  className="w-[15vw] rounded-full object-cover h-[12vh] shrink-0"
                  src="https://k72.ca/images/teamMembers/Michele_640x290.jpg?w=640&h=290&s=fc2d5857a514aaf26bec2eb052a2d734"
                  alt=""
                />
                <h2 className="whitespace-nowrap ">Pour Tout savoir</h2>
                <img
                  className="w-[15vw] rounded-full object-cover h-[12vh] shrink-0"
                  src="https://k72.ca/images/teamMembers/CAMILLE_640X290_2.jpg?w=640&h=290&s=245670e7fb5e1d229c25bfc5129b8577"
                  alt=""
                />
                <h2 className="whitespace-nowrap ">Pour Tout savoir</h2>
                <img
                  className="w-[15vw] rounded-full object-cover h-[12vh] shrink-0"
                  src="https://k72.ca/images/teamMembers/Michele_640x290.jpg?w=640&h=290&s=fc2d5857a514aaf26bec2eb052a2d734"
                  alt=""
                />
                <h2 className="whitespace-nowrap ">Pour Tout savoir</h2>
                <img
                  className="w-[15vw] rounded-full object-cover h-[12vh] shrink-0"
                  src="https://k72.ca/images/teamMembers/CAMILLE_640X290_2.jpg?w=640&h=290&s=245670e7fb5e1d229c25bfc5129b8577"
                  alt=""
                />
              </div>
            </div>
          </a>
          <div
            className="link text-white h-1/4 w-full text-[8vw] text-center uppercase font-[font2] relative overflow-hidden border-t border-white pt-3 cursor-pointer"
            onMouseEnter={() => {
              setContactHovered(true);
            }}
            onMouseLeave={() => {
              setContactHovered(false);
            }}
          >
            <h2 className="leading-25 main-text-2">contact</h2>
            <div
              className="h-full w-full bg-transparent absolute top-0 "
              ref={contactmarquee}
            ></div>
            <div className=" items-center absolute top-0 moveX2  flex leading-25 opacity-0 text-black pt-3">
              <h2 className="whitespace-nowrap flex ">
                pour envoyer un fax <RiServiceFill size={96} />
              </h2>

              <h2 className="whitespace-nowrap  flex ">
                pour envoyer un fax <RiServiceFill size={96} />
              </h2>

              <h2 className="whitespace-nowrap flex ">
                pour envoyer un fax <RiServiceFill size={96} />
              </h2>

              <h2 className="whitespace-nowrap flex ">
                pour envoyer un fax <RiServiceFill size={96} />
              </h2>
            </div>
          </div>
          <div
            className="link text-white h-1/4 w-full text-[8vw] text-center uppercase font-[font2] relative overflow-hidden border-y border-white pt-2 cursor-pointer"
            onMouseEnter={() => {
              setBlogueHovered(true);
            }}
            onMouseLeave={() => {
              setBlogueHovered(false);
            }}
          >
            <h2 className="leading-25 main-text-3">blogue</h2>
            <div
              className="h-full w-full bg-transparent absolute top-0 "
              ref={bloguemarquee}
            ></div>
            <div className=" items-center absolute top-0 moveX3  flex leading-25 opacity-0 text-black pt-3 ">
              <h2 className="whitespace-nowrap ">lire les articles</h2>
              <img
                className="w-[15vw] rounded-full object-cover h-[12vh] shrink-0"
                src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a"
                alt=""
              />
              <h2 className="whitespace-nowrap ">lire les articles</h2>
              <img
                className="w-[15vw] rounded-full object-cover h-[12vh] shrink-0"
                src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                alt=""
              />
              <h2 className="whitespace-nowrap ">lire les articles</h2>
              <img
                className="w-[15vw] rounded-full object-cover h-[12vh] shrink-0"
                src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a"
                alt=""
              />
              <h2 className="whitespace-nowrap ">lire les articles</h2>
              <img
                className="w-[15vw] rounded-full object-cover h-[12vh] shrink-0"
                src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="bottom-part flex justify-between w-full">
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
    </div>
  );
};

export default Navmenu;
