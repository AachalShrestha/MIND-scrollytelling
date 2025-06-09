"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import "@/app/intro.css"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MainParticle from "./components/mainParticle";
gsap.registerPlugin(ScrollTrigger);

function Intro() {
  const subtitleRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const subtitleEl = subtitleRef.current;
    const imgEl = imgRef.current;

    gsap.to(imgEl, {
      scale: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: subtitleEl,
        start: "bottom top",
        end: "bottom top+=100",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);


  
// Draft to go to next page, change with scroll later
  const router = useRouter();

  const goToNextPage = () => {
    router.push("/particleTube"); // path of the page you want to navigate to
  };


  return (
    <>
      <div className="big-wrapper">
        <div>
          <h1 className="big-title main-title">MAKING THE INVISIBLE VISIBLE</h1>
        </div>
        <p>
          How new the Higgs Boson (and other particles) are discovered at Cern
        </p>
      
      <div className="pt-2">
        <h1 ref={subtitleRef} className="big-title sub-title">
          Some particles, like the Higgs boson, do not exist naturally in our
          everyday world.
        </h1>
        {/*         <div className="img-main">
          <img
            ref={imgRef}
            className="floating-img"
            src="/assets/particles/pink/O_MAIN.png"
          />
        </div> */}
        <MainParticle ref={imgRef}></MainParticle>
      </div>
      <button onClick={goToNextPage}>next page</button>
      </div>
      <img src="/assets/particles/pink/O_2.png" alt="Particle 2" />
      <img src="/assets/particles/pink/O_2.png" alt="Particle 2" />
      <img src="/assets/particles/pink/O_2.png" alt="Particle 2" />
    </>
  );
}

export default Intro;
