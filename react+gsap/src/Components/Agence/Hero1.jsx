import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Nav from "./Nav.jsx";
import Logo2 from "../main/Logo2.jsx";
import { RiGlobalLine } from "@remixicon/react";
const Hero1 = () => {
  const imagedivref = useRef(null);
  const imageref = useRef(null);

  const userarray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    // "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    // "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    // "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    // "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    // "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    // "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
  ];

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(function () {
    gsap.to(imagedivref.current, {
      scrollTrigger: {
        trigger: imagedivref.current,
        start: "top 26%",
        end: "top -120%",
        scrub: 2,
        pin: true,
        

        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageindex = Math.floor(elem.progress * userarray.length);
          if (imageindex === userarray.length) {
            imageindex--;
            imageref.current.src = userarray[imageindex];
          } else {
            imageref.current.src = userarray[imageindex];
          }
        },
      },
    });
  });

  return (
    <div className="h-screen w-full">
      <Logo2 />
      <div className=" absolute h-[17vh] w-full overflow-x-hidden">
        <Nav />
      </div>
      <div className="w-full h-screen bg-white py-1 ">
        <div
          className="w-[15vw] h-auto absolute rounded-3xl overflow-hidden left-[30vw] top-[13vw]"
          ref={imagedivref}
        >
          <img
            ref={imageref}
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
            alt=""
          />
        </div>
        <div className=" text-center mt-[28.2vw] relative   selection:bg-[#D3FD50] selection:text-black ">
          <h2 className="text-[20vw] font-[font2] uppercase leading-[17.2vw]">
            Soixan7e Douze
          </h2>
          <div className="w-full font-[font2] text-[3.5vw] leading-[3.5vw] ">
            <p className="text-left pl-[37vw] select-none">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Notre
              curiosité nourrit notre créativité. On reste humbles et on dit non
              aux gros egos, même le vôtre. Une marque est vivante. Elle a des
              valeurs, une personnalité, une histoire. Si on oublie ça, on peut
              faire de bons chiffres à court terme, mais on la tue à long terme.
              C’est pour ça qu’on s’engage à donner de la perspective, pour
              bâtir des marques influentes.
            </p>
          </div>
        </div>
        <div className="bottom-part h-100 flex items-center justify-between w-full bg-black mt-40 ">
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

export default Hero1;
