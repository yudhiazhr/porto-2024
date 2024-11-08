import gsap, { ScrollTrigger } from "gsap/all";
import HeroImg from "../../src/assets/yuds.jpeg";
import { useEffect } from "react";

export const AboutMobile = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const timeLine = gsap.timeline({
      scrollTrigger: {
        trigger: ".wrapper-img",
        start: "top 80%",
        end: "top 80%",
      },
    });
  
    timeLine.to(
      ".img-project-mobile-1",
      {
        height: 0,
        y: 0,
        duration: 2,
      },
      0
    ),
      gsap.to(".img-project-mobile-2", {
        scrollTrigger: {
          trigger: ".button-project-1",
          start: "top 80%",
          end: "top 80%",
        },
        height: 0,
        y: 0,
        duration: 2,
      });
  
    gsap.to(".img-project-mobile-3", {
      scrollTrigger: {
        trigger: ".button-project-2",
        start: "top 80%",
        end: "top 80%",
      },
      height: 0,
      y: 0,
      duration: 2,
    });
  
    gsap.to(".img-project-mobile-4", {
      scrollTrigger: {
        trigger: ".button-project-3",
        start: "top 80%",
        end: "top 80%",
      },
      height: 0,
      y: 0,
      duration: 2,
    });

  })

  return (
    <>
      <div className="about-section md:hidden flex flex-col gap-6">
        <div className="relative flex">
          <img
            src={HeroImg}
            className=" w-full h-[500px] object-cover rounded-sm "
            alt=""
          />
          <div className="absolute bottom-0 img-reveal-about bg-[#F5F7F8] w-full h-full"></div>
        </div>

        <div className="wrapper-text-reveal-about-mobile">
          <div className="overflow-hidden">
            <h1 className="text-reveal-about-mobile text-4xl sm:text-5xl leading-[100%] uppercase">
              I craft beautiful
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="text-reveal-about-mobile text-4xl sm:text-5xl leading-[100%] uppercase">
              experiences & attractive
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="text-reveal-about-mobile text-4xl sm:text-5xl leading-[100%] uppercase">
              modern website
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="text-reveal-about-mobile text-4xl sm:text-5xl leading-[100%] uppercase">
              using GSAP.
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full ">
          <p className="text-reveal-about-mobile-desc text-md sm:text-lg font-[400]">
            I believe web design can be more diverse and inspiring, with a
            mission to reveal the possibilities of an attractive modern website.
            Through every project, I strive to explore new ways of expression,
            combining creativity with functionality in fresh and unique ways.
            Driven by experiments and thoughtful innovation, I aim to redefine
            what an attractive modern website can achieve.
          </p>
          <a
            className="text-reveal-about-desc hover:text-white hover:bg-blue-700 border-[1px] text-md font-semibold h-10 w-44 border-black rounded-full flex gap-3 justify-center items-center py-3 cursor-pointer"
            href="cv/Curriculum Vitae - Muhammad Yudhi Azhari.pdf"
            download="CV - Muhammad Yudhi Azhari"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </>
  );
};
