import { useEffect, useState } from "react";
import HeroImg from "../../assets/yuds.jpeg";
import { Navbar } from "../../components/navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import KelahKeluh from "../../assets/kelah-keluh.png";
import OPS from "../../assets/operating-placement-system.png";
import SiapaVote from "../../assets/siapa-vote.png";
import WordCloud from "../../assets/word-cloud.png";
import { HeroMobile } from "../../mobile/hero";
import { AboutMobile } from "../../mobile/about";
import { ProjectMobile } from "../../mobile/project";
import { GetInTouch } from "../../components/getInTouch";

export const Hero = () => {
  const [arrayLength, setArrayLength] = useState(15);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(
        ".text-reveal",
        {
          y: 200,
          duration: 1.5,
          stagger: 0.2,
        },
        0
      )
        .to(
          ".img-hero-reveal",
          {
            height: 0,
            duration: 2.5,
            y: 304,
          },
          1.5
        )
        .from(
          ".text-reveal-desc",
          {
            opacity: 0,
            duration: 2,
          },
          2
        );

      const scrollAboutTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 60%",
          end: "top 60%",
        },
      });

      scrollAboutTl.to(
        ".img-reveal-about",
        {
          height: 0,
          duration: 2,
          y: 0,
        },
        0
      );

      /* Dekstop */
      const scrollAboutTextTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#wrapper-text-reveal-about",
          start: "20% 90%",
          end: "20% 90%",
        },
        id: "text-reveal-about",
      });

      scrollAboutTextTl
        .from(".text-reveal-about", {
          y: 80,
          duration: 1,
          stagger: 0.2,
        })
        .from(
          ".text-reveal-about-desc",
          {
            opacity: 0,
            duration: 1.5,
            stagger: 0.8,
          },
          1
        );
      /* Dekstop-end*/

      /* Mobile */
      const scrollAboutTextMobileTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".wrapper-text-reveal-about-mobile",
          start: "top 90%",
          end: "top 90%",
        },
        id: "text-reveal-about-mobile",
      });

      scrollAboutTextMobileTl
        .from(".text-reveal-about-mobile", {
          y: 40,
          duration: 1,
          stagger: 0.2,
        })
        .from(
          ".text-reveal-about-mobile-desc",
          {
            opacity: 0,
            duration: 2,
          },
          1
        );
      /* Mobile-end */

      const scrollTitleProject = gsap.timeline({
        scrollTrigger: {
          trigger: ".title-project",
          start: "top 80%",
          end: "bottom 80%",
          scrub: 2,
        },
      });

      scrollTitleProject.from(".looping-bar", {
        height: 0,
        duration: 0.5,
        stagger: 0.1,
        y: -1080,
        ease: "power2.out",
      });

      const selectedProject = gsap.timeline({
        scrollTrigger: {
          trigger: ".wrapper-selected-project",
          start: "top 80%",
          end: "top 80%",
        },
      });

      selectedProject.from(
        ".text-selected-project",
        {
          y: 130,
          duration: 1,
          stagger: 0.25,
        },
        0
      );

      selectedProject.from(
        ".border-line",
        {
          width: "0%",
          duration: 1,
        },
        0
      );

      selectedProject.from(
        ".info-project",
        {
          opacity: 0,
          duration: 1,
        },
        1
      );

      ScrollTrigger.matchMedia({
        "(min-width: 768px)": function() {
          const scrollHorizontal = gsap.timeline({
            scrollTrigger: {
              trigger: ".project-section",
              start: "top 2%",
              scrub: 1,
              pin: true,
              pinSpacer: false,
              anticipatePin: 1,
              
            },
          });
    
          scrollHorizontal.fromTo(
            ".inner-container",
            { translateX: 0 },
            {
              translateX: "-292vw",
              duration: 1,
              ease: "none",
              stagger: 0.5,
            }
          );
        },
    
        // For screens below 768px (disable animation)
        "(max-width: 767px)": function() {
        }
      });
      

      

      const triggerProjectOne = gsap.timeline({
        scrollTrigger: {
          trigger: ".container-project-1",
          start: "top 80%",
          end: "top 80%",
        },
      });
      triggerProjectOne
        .to(
          ".img-project-1",
          {
            height: 0,
            y: 0,
            duration: 2,
          },
          0
        )
        .from(
          ".title-project-1",
          {
            y: 130,
            duration: 1,
            stagger: 0.5,
          },
          0.4
        )
        .from(
          ".button-view-project-siapa", {
          opacity: 0,
          duration: 1,
        });

      const triggerProjectTwo = gsap.timeline({
        scrollTrigger: {
          trigger: ".wrapper-ops",
          start: "left 20%",
          end: "left 20%",
        },
        id: "project-2",
      });
      triggerProjectTwo
        .to(
          ".img-ops",
          {
            height: 0,
            y: 0,
            duration: 2,
          },
          0
        )
        .from(
          ".title-ops",
          {
            y: 130,
            duration: 1,
            stagger: 0.5,
          },
          0.4
        )
        .from(".button-view-project-ops", {
          opacity: 0,
          duration: 1,
        })
        .from(
          ".border-line-ops",
          {
            width: "0%",
            duration: 1,
          },
          0
        )
        .from(
          ".info-project-ops",
          {
            opacity: 0,
            duration: 1,
          },
          1
        );

      const triggerProjectThree = gsap.timeline({
        scrollTrigger: {
          trigger: ".wrapper-word-cloud",
          start: "center 20%",
          end: "center 20%",
        },
        id: "project-3",
      });
      triggerProjectThree
        .to(
          ".img-word-cloud",
          {
            height: 0,
            y: 0,
            duration: 2,
          },
          0
        )
        .from(
          ".title-word-cloud",
          {
            y: 130,
            duration: 1,
            stagger: 0.5,
          },
          0.4
        )
        .from(".button-view-project-word-cloud", {
          opacity: 0,
          duration: 1,
        })
        .from(
          ".border-line-word-cloud",
          {
            width: "0%",
            duration: 1,
          },
          0
        )
        .from(
          ".info-project-word-cloud",
          {
            opacity: 0,
            duration: 1,
          },
          1
        );

      const triggerProjectFour = gsap.timeline({
        scrollTrigger: {
          trigger: ".wrapper-kelah-keluh",
          start: "bottom 10%",
          end: "bottom 10%",
        },
        id: "project-4",
      });
      triggerProjectFour
        .to(
          ".img-kelah-keluh",
          {
            height: 0,
            y: 0,
            duration: 2,
          },
          0
        )
        .from(
          ".title-kelah-keluh",
          {
            y: 130,
            duration: 1,
            stagger: 0.5,
          },
          0.4
        )
        .from(".button-view-project-kelah-keluh", {
          opacity: 0,
          duration: 1,
        })
        .from(
          ".border-line-kelah-keluh",
          {
            width: "0%",
            duration: 1,
          },
          0
        )
        .from(
          ".info-project-kelah-keluh",
          {
            opacity: 0,
            duration: 1,
          },
          1
        );

        /* Mobile GSAP */
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
    
        gsap.to(".img-project-mobile-2", 
          {
            scrollTrigger: {
              trigger: ".button-project-1",
              start: "top 80%",
              end: "top 80%",
            },
            height: 0,
            y: 0,
            duration: 2,
          }
        )
    
        gsap.to(".img-project-mobile-3", 
          {
            scrollTrigger: {
              trigger: ".button-project-2",
              start: "top 80%",
              end: "top 80%",
            },
            height: 0,
            y: 0,
            duration: 2,
          }
        )
    
        gsap.to(".img-project-mobile-4", 
          {
            scrollTrigger: {
              trigger: ".button-project-3",
              start: "top 80%",
              end: "top 80%",
            },
            height: 0,
            y: 0,
            duration: 2,
          }
        )
    });

    const updateArrayLength = () => {
      if (window.innerWidth >= 320 && window.innerWidth < 520) {
        setArrayLength(7);
      } else if (window.innerWidth >= 520 && window.innerWidth < 768) {
        setArrayLength(9);
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setArrayLength(7);
      } else if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
        setArrayLength(9);
      } else {
        setArrayLength(14);
      }
    };
    updateArrayLength();
    window.addEventListener("resize", updateArrayLength);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", updateArrayLength);
    };
  }, []);
  return (
    <>
      <Navbar />
      {/* HERO SECTION */}
      <HeroMobile />
      <section
        className=" hidden
         md:min-h-32 lg:min-h-dvh md:flex flex-col md:justify-center  md:px-0 md:py-32 lg:p-10 overflow-hidden"
      >
        <div className="  w-full overflow-hidden">
          <h1 className="text-reveal md:text-[9vw]  transform scale-x-[1.4] scale-[1.2] font-semibold text-center leading-[100%]">
            YUDHI AZHARI
          </h1>
        </div>
        <div className=" w-full overflow-hidden">
          <h1 className=" text-reveal md:text-center md:text-[9vw] transform scale-x-[1.4]  scale-[1.2] font-semibold  leading-[100%]">
            FRONTEND
          </h1>
        </div>
        <div className="  w-full overflow-hidden">
          <h1 className=" text-reveal md:text-center md:ml-[180px]   md:text-[9vw] transform scale-x-[1.4]  scale-[1.2] font-semibold  leading-[100%]">
            DEVELOPER
          </h1>
        </div>
        <div className=" w-full flex lg:gap-0 md:gap-28 overflow-hidden md:justify-center lg:justify-between items-center">
          <div className="flex relative">
            <img
              src="https://media2.giphy.com/media/a5viI92PAF89q/200w.gif?cid=6c09b952kvioi2f4yduu2uhxy8ifqkiucnu737h6tvejpuvn&ep=v1_gifs_search&rid=200w.gif&ct=g"
              alt=""
              className=" md:w-[18vw] lg:w-[24vw] md:h-[100px] lg:h-[150px] xl:h-[200px] object-cover rounded-lg"
            />
            <div className="absolute img-hero-reveal bg-[#F5F7F8] w-full h-full"></div>
          </div>

          <h1 className=" text-reveal  md:pr-0 lg:text-center lg:mr-32 xl:mr-52  md:text-[9vw] font-semibold transform scale-x-[1.4]  scale-[1.2] leading-[100%]">
            PORTFOLIO
          </h1>
        </div>
        <div className="flex gap-6 lg:gap-4  md:mt-12 w-full md:justify-between xl:justify-around  items-center  overflow-hidden ">
          <h1 className=" text-reveal   md:text-[8vw] lg:text-[7vw] transform scale-x-[1.4] scale-[1.2] leading-[100%] font-semibold pl-12 ">
            -INA
          </h1>
          <div className="md:w-[30%] lg:w-[33%]  flex justify-center items-center text-center ">
            <p className="text-reveal-desc md:text-[1.5vw] lg:text-base text-start">
              Hi! I am Yudhi, a frontend developer based in Jakarta, I&apos;m
              passionate in web development and exploring the world of coding is
              like an adventure for me, where every line of code is a step
              towards greater achievements.
            </p>
          </div>
          <div className="flex md:gap-14 xl:gap-20  items-center justify-center overflow-hidden ">
            <div className="text-reveal  md:h-12 md:w-12 lg:w-20 lg:h-20 xl:w-26 xl:h-26 bg-black rounded-full"></div>
            <div className=" text-reveal  md:text-[8vw] lg:text-[7vw] transform scale-x-[1.4] scale-[1.2] leading-[100%] font-semibold pr-16">
              2024
            </div>
          </div>
        </div>
      </section>
      {/* ABOUT SECTION */}
      <section
        id="about"
        className=" min-h-dvh flex flex-col px-3 lg:px-10 pt-20 md:pt-0 overflow-hidden"
      >
        <AboutMobile />
        <div className="hidden md:flex md:flex-col xl:grid xl:grid-cols-2">
          <div className="relative flex ">
            <img
              src={HeroImg}
              className=" about-section lg:w-full xl:w-[90%] lg:h-[800px] md:w-full md:h-[430px] object-cover rounded-xl"
              alt=""
            />
            <div className="absolute bottom-0 img-reveal-about bg-[#F5F7F8] lg:w-full xl:w-[90%] lg:h-[1000px] md:w-full md:h-[430px]"></div>
          </div>
          <div className=" grid grid-rows-2 pt-8">
            <div
              id="wrapper-text-reveal-about"
              className="xl:flex flex-col md:hidden"
            >
              <div className="overflow-hidden">
                <h1 className="text-reveal-about md:text-[64px] lg:text-[96px] xl:text-[5vw] leading-[100%] uppercase">
                  I craft beautiful
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="text-reveal-about md:text-[64px] lg:text-[96px] xl:text-[5vw] leading-[100%] uppercase">
                  experiences &
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="text-reveal-about md:text-[64px] lg:text-[96px] xl:text-[5vw] leading-[100%] uppercase">
                  attractive
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="text-reveal-about md:text-[64px] lg:text-[96px] xl:text-[5vw] leading-[100%] uppercase">
                  modern website
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="text-reveal-about md:text-[64px] lg:text-[96px] xl:text-[5vw] leading-[100%] uppercase">
                  with GSAP
                </h1>
              </div>
            </div>

            <div className=" flex-col xl:hidden md:flex sm:hidden">
              <div className="overflow-hidden">
                <h1 className="text-reveal-about md:text-[48px] lg:text-[72px] leading-[100%] uppercase">
                  I craft beautiful
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="text-reveal-about md:text-[48px] lg:text-[72px] leading-[100%] uppercase">
                  experiences & attractive
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="text-reveal-about md:text-[48px] lg:text-[72px] leading-[100%] uppercase">
                  modern website using
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="text-reveal-about md:text-[48px] lg:text-[72px] leading-[100%] uppercase">
                  GSAP
                </h1>
              </div>
            </div>

            <div className="flex flex-col md:justify-start xl:items-center xl:justify-start md:gap-6 md:pt-4 lg:pt-8 xl:pt-3 2xl:pt-16">
              <p className="text-reveal-about-desc md:text-lg lg:text-xl xl:text-base md:w-full xl:w-[70%] 2xl:w-[50%] ">
                I believe web design can be more diverse and inspiring, with a
                mission to reveal the possibilities of an attractive modern
                website. Through every project, I strive to explore new ways of
                expression, combining creativity with functionality in fresh and
                unique ways. Driven by experiments and thoughtful innovation, I
                aim to redefine what an attractive modern website can achieve.
              </p>
              <div className="flex justify-start w-full xl:w-[70%] 2xl:w-[50%]">
                <a
                  href="public/Curriculum Vitae - Muhammad Yudhi Azhari.pdf"
                  download="CV - Muhammad Yudhi Azhari"
                  className=" text-reveal-about-desc hover:text-white hover:bg-blue-700 border-[1px] text-md font-semibold h-10 w-44 border-black rounded-full flex gap-3 justify-center items-center py-3 cursor-pointer"
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
          </div>
        </div>
      </section>

      {/* PROJECT */}
      <section className="title-project relative overflow-hidden md:min-h-[200dvh] min-h-[100dvh] flex justify-center items-center gap-6 md:gap-12 px-3 md:px-10 mt-12 md:mt-0 ">
        {Array.from({ length: arrayLength }).map((_, index) => (
          <div
            key={index}
            className="bg-black w-10 md:w-20 h-[100dvh] md:h-[200dvh] looping-bar rounded-sm md:rounded-2xl"
          ></div>
        ))}
      </section>

      <section
        id="projects"
        className="min-h-dvh w-full p-3 md:p-5 lg:p-10 project-section flex flex-col my-24 md:my-0 gap-6 md:gap-8 overflow-hidden"
      >
        <div className="flex md:inline-flex  wrapper-selected-project flex-col md:flex-row md:gap-3 lg:gap-8 md:pt-9 lg:pt-4 w-full overflow-hidden">
          <h1 className="text-selected-project text-3xl md:text-5xl lg:text-7xl xl:text-[6.5vw] leading-[90%] md:leading-[100%] font-semibold ">
            SELECTED
          </h1>
          <h1 className="text-selected-project text-3xl md:text-5xl lg:text-7xl xl:text-[6.5vw] leading-[90%] md:leading-[100%] font-semibold ">
            PROJECT
          </h1>
        </div>

        <ProjectMobile />
        <div className="hidden md:flex gap-8 w-[388.6vw] inner-container pb-24">
          {/* SIAPA VOTE */}
          <div className="siapa-vote flex flex-col  xl:w-[95.4dvw] md:w-[94dvw] ">
            <div className=" border-line border-t-2 border-black py-3">
              <div className="info-project flex justify-between text-md ">
                <h1 className=" text-base">01</h1>
                <div className=" border-[1px] h-8 border-black rounded-full flex justify-center items-center px-6">
                  WEBSITE
                </div>
                <h1 className=" text-base">SIAPA VOTE</h1>
                <div className=" flex flex-col text-md">
                  <h1 className="text-base">NEXT JS</h1>
                  <h1 className="text-base">TAILWIND CSS</h1>
                  <h1 className="text-base">FIREBASE</h1>
                  <h1 className="text-base">GSAP</h1>
                </div>
              </div>
            </div>

            <div className="container-project-1 flex md:flex-col xl:flex-row xl:justify-between md:items-center xl:items-end  gap-8 w-full xl:mt-3 md:mt-0">
              <div className="flex xl:flex-col xl:w-[40%] md:flex-row md:w-full md:gap-5 md:order-2 xl:order-1  md:justify-between md:items-center xl:items-stretch">
                <div className="flex md:flex-row xl:flex-col gap-4 ">
                  <div className="overflow-hidden">
                    <h1 className="title-project-1 md:text-5xl lg:text-6xl xl:text-[6.5vw] leading-[100%]">
                      SIAPA
                    </h1>
                  </div>
                  <div className="overflow-hidden">
                    <h1 className="title-project-1 md:text-5xl lg:text-6xl xl:text-[6.5vw] leading-[100%] text-end">
                      VOTE WEB
                    </h1>
                  </div>
                </div>

                <div className="button-view-project-siapa flex xl:hidden gap-2">
                  <a
                    href="https://siapa-vote.vercel.app/"
                    target="_blank"
                    className=" border-[1px] group text-xl h-full border-black rounded-full flex justify-center items-center gap-2 px-6 py-2 hover:bg-blue-700 transition-all duration-300 hover:text-white"
                  >
                    <svg
                      className="group-hover:text-white transition-all duration-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      color="#000000"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M18 14v4.8a1.2 1.2 0 0 1-1.2 1.2H5.2A1.2 1.2 0 0 1 4 18.8V7.2A1.2 1.2 0 0 1 5.2 6h4.6m4.4-2H20v5.8m-7.9 2L20 4.2"
                      ></path>
                    </svg>
                    VIEW
                  </a>
                  <a
                    href="https://github.com/yudhiazhr/siapa-vote"
                    target="_blank"
                    className=" border-[1px] group text-xl h-full border-black rounded-full flex justify-center items-center gap-2 px-6 py-2 hover:bg-black transition-all duration-300 hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      color="#000000"
                      fill="none"
                      className="group-hover:text-white transition-all duration-300"
                    >
                      <path
                        d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    GITHUB
                  </a>
                </div>
              </div>
              <div className=" flex items-center justify-center relative group xl:w-[50%] lg:w-[70%] md:w-full  md:order-1 xl:order-2">
                <img
                  src={SiapaVote}
                  className="w-full h-full object-cover rounded-2xl"
                  alt=""
                />
                <div className="absolute md:hidden xl:flex gap-3 justify-center items-center group-hover:bg-black/20 w-full h-full invisible group-hover:visible group-hover:cursor-pointer transition-all duration-300 rounded-2xl">
                  <a
                    href="https://siapa-vote.vercel.app/"
                    target="_blank"
                    className="text-3xl group-hover:text-black group-hover:bg-white/80  group-hover:backdrop-blur-sm px-8 py-2 rounded-full backdrop-blur-0 text-transparent transition-all duration-300"
                  >
                    VIEW
                  </a>
                  <a
                    href="https://github.com/yudhiazhr/siapa-vote"
                    target="_blank"
                    className="text-3xl group-hover:text-black group-hover:bg-white/80  group-hover:backdrop-blur-sm px-8 py-2 rounded-full backdrop-blur-0 text-transparent transition-all duration-300"
                  >
                    GITHUB
                  </a>
                </div>
                <div className="img-project-1 absolute bottom-0 flex bg-[#F5F7F8] w-full h-full"></div>
              </div>
            </div>
          </div>

          {/* OPS */}
          <div className="ops flex flex-col  xl:w-[95.4dvw] md:w-[94dvw] ">
            <div className="border-line-ops border-t-2 border-black py-3">
              <div className="info-project-ops flex justify-between text-md ">
                <h1>02</h1>
                <div className="border-[1px] h-8 border-black rounded-full flex justify-center items-center px-6">
                  WEBSITE
                </div>
                <h1>OPERATING PLACEMENT SYSTEM</h1>
                <div className="flex flex-col text-md">
                  <h1>NEXT JS</h1>
                  <h1>TAILWIND CSS</h1>
                  <h1>FIREBASE</h1>
                  <h1>CHART JS</h1>
                </div>
              </div>
            </div>

            <div className="wrapper-ops flex md:flex-col xl:flex-row xl:justify-between md:items-center xl:items-start gap-8 w-full xl:mt-3 md:mt-0">
              <div className=" flex items-center justify-center relative group xl:w-[50%] lg:w-[70%] md:w-full">
                <img
                  src={OPS}
                  className="w-full h-full object-cover rounded-2xl"
                  alt=""
                />
                <div className="absolute md:hidden xl:flex gap-3 justify-center items-center group-hover:bg-black/20 w-full h-full invisible group-hover:visible group-hover:cursor-pointer transition-all duration-300 rounded-2xl">
                  <a
                    href="https://operating-placement-system.vercel.app/"
                    target="_blank"
                    className="text-3xl group-hover:text-black group-hover:bg-white/80  group-hover:backdrop-blur-sm px-8 py-2 rounded-full backdrop-blur-0 text-transparent transition-all duration-300"
                  >
                    VIEW
                  </a>
                  <a
                    href="https://github.com/yudhiazhr/operating-placement-system"
                    target="_blank"
                    className="text-3xl group-hover:text-black group-hover:bg-white/80  group-hover:backdrop-blur-sm px-8 py-2 rounded-full backdrop-blur-0 text-transparent transition-all duration-300"
                  >
                    GITHUB
                  </a>
                </div>
                <div className="img-ops absolute bottom-0 flex bg-[#F5F7F8] w-full h-full"></div>
              </div>
              <div className="flex xl:flex-col xl:w-[40%] md:flex-row md:w-full md:gap-5 md:justify-between md:items-center xl:items-start ">
                <div className="flex md:flex-row xl:flex-col gap-4">
                  <div className="overflow-hidden">
                    <h1 className="title-ops md:text-5xl lg:text-6xl xl:text-[6.5vw] leading-[100%]">
                      PLACEMENT
                    </h1>
                  </div>
                  <div className="overflow-hidden">
                    <h1 className="title-ops md:text-5xl lg:text-6xl xl:text-[6.5vw] leading-[100%] text-end">
                      SYSTEM
                    </h1>
                  </div>
                </div>

                <div className="button-view-project-ops flex xl:hidden gap-2">
                  <a
                    href="https://operating-placement-system.vercel.app/"
                    target="_blank"
                    className="cursor-pointer border-[1px] group text-xl h-full border-black rounded-full flex justify-center items-center gap-2 px-6 py-2 hover:bg-blue-700 transition-all duration-300 hover:text-white"
                  >
                    <svg
                      className="group-hover:text-white transition-all duration-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      color="#000000"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M18 14v4.8a1.2 1.2 0 0 1-1.2 1.2H5.2A1.2 1.2 0 0 1 4 18.8V7.2A1.2 1.2 0 0 1 5.2 6h4.6m4.4-2H20v5.8m-7.9 2L20 4.2"
                      ></path>
                    </svg>
                    VIEW
                  </a>
                  <a
                    href="https://github.com/yudhiazhr/operating-placement-system"
                    target="_blank"
                    className="cursor-pointer border-[1px] group text-xl h-full border-black rounded-full flex justify-center items-center gap-2 px-6 py-2 hover:bg-black transition-all duration-300 hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      color="#000000"
                      fill="none"
                      className="group-hover:text-white transition-all duration-300"
                    >
                      <path
                        d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    GITHUB
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* WORD CLOUD */}
          <div className="word-cloud flex flex-col  xl:w-[95.4dvw] md:w-[94dvw] ">
            <div className="border-line-word-cloud border-t-2 border-black py-3">
              <div className="info-project-word-cloud flex justify-between text-md ">
                <h1>03</h1>
                <div className="border-[1px] h-8 border-black rounded-full flex justify-center items-center px-6">
                  WEBSITE
                </div>
                <h1>WORD CLOUD </h1>
                <div className="flex flex-col text-md">
                  <h1>NEXT JS</h1>
                  <h1>TAILWIND CSS</h1>
                  <h1>JOYRIDE</h1>
                  <h1>GSAP</h1>
                </div>
              </div>
            </div>

            <div className="wrapper-word-cloud flex md:flex-col xl:flex-row xl:justify-between md:items-center xl:items-end  gap-8 w-full xl:mt-3 md:mt-0">
              <div className="flex xl:flex-col xl:w-[40%] md:flex-row md:w-full md:gap-5 md:order-2 xl:order-1  md:justify-between md:items-center xl:items-stretch">
                <div className="flex md:flex-row xl:flex-col gap-4 ">
                  <div className="overflow-hidden">
                    <h1 className="title-word-cloud md:text-5xl lg:text-6xl xl:text-[6.5vw] leading-[100%]">
                      WORD
                    </h1>
                  </div>
                  <div className="overflow-hidden">
                    <h1 className="title-word-cloud md:text-5xl lg:text-6xl xl:text-[6.5vw] leading-[100%] text-end">
                      CLOUD WEB
                    </h1>
                  </div>
                </div>

                <div className="button-view-project-word-cloud flex xl:hidden gap-2">
                  <a
                    href="https://word-clouds.vercel.app/"
                    target="_blank"
                    className=" border-[1px] group text-xl h-full border-black rounded-full flex justify-center items-center gap-2 px-6 py-2 hover:bg-blue-700 transition-all duration-300 hover:text-white"
                  >
                    <svg
                      className="group-hover:text-white transition-all duration-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      color="#000000"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M18 14v4.8a1.2 1.2 0 0 1-1.2 1.2H5.2A1.2 1.2 0 0 1 4 18.8V7.2A1.2 1.2 0 0 1 5.2 6h4.6m4.4-2H20v5.8m-7.9 2L20 4.2"
                      ></path>
                    </svg>
                    VIEW
                  </a>
                  <a
                    href="https://github.com/yudhiazhr/word-cloud-with-reactjs-vite"
                    target="_blank"
                    className=" border-[1px] group text-xl h-full border-black rounded-full flex justify-center items-center gap-2 px-6 py-2 hover:bg-black transition-all duration-300 hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      color="#000000"
                      fill="none"
                      className="group-hover:text-white transition-all duration-300"
                    >
                      <path
                        d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    GITHUB
                  </a>
                </div>
              </div>
              <div className=" flex items-center justify-center relative group xl:w-[50%] lg:w-[70%] md:w-full  md:order-1 xl:order-2]">
                <img
                  src={WordCloud}
                  className="w-full h-full object-cover rounded-2xl"
                  alt=""
                />
                <div className="absolute md:hidden xl:flex gap-3 justify-center items-center group-hover:bg-black/20 w-full h-full invisible group-hover:visible group-hover:cursor-pointer transition-all duration-300 rounded-2xl">
                  <a
                    href="https://word-clouds.vercel.app/"
                    target="_blank"
                    className="text-3xl group-hover:text-black group-hover:bg-white/80  group-hover:backdrop-blur-sm px-8 py-2 rounded-full backdrop-blur-0 text-transparent transition-all duration-300"
                  >
                    VIEW
                  </a>
                  <a
                    href="https://github.com/yudhiazhr/word-cloud-with-reactjs-vite"
                    target="_blank"
                    className="text-3xl group-hover:text-black group-hover:bg-white/80  group-hover:backdrop-blur-sm px-8 py-2 rounded-full backdrop-blur-0 text-transparent transition-all duration-300"
                  >
                    GITHUB
                  </a>
                </div>
                <div className="img-word-cloud absolute bottom-0 flex bg-[#F5F7F8] w-full h-full"></div>
              </div>
            </div>
          </div>

          {/* KELAH-KELUH */}
          <div className="kelah-keluh flex flex-col  xl:w-[95.4dvw] md:w-[94dvw] ">
            <div className="border-line-kelah-keluh border-t-2 border-black py-3">
              <div className="info-project-kelah-keluh flex justify-between text-md ">
                <h1>04</h1>
                <div className="border-[1px] h-8 border-black rounded-full flex justify-center items-center px-6">
                  WEBSITE
                </div>
                <h1>Kelah Keluh</h1>
                <div className="flex flex-col text-md">
                  <h1>NEXT JS</h1>
                  <h1>TAILWIND CSS</h1>
                  <h1>GSAP</h1>
                  <h1>GOOGLE SPREADSHEET</h1>
                </div>
              </div>
            </div>

            <div className="wrapper-kelah-keluh flex md:flex-col xl:flex-row xl:justify-between md:items-center xl:items-end  gap-8 w-full xl:mt-3 md:mt-0">
              <div className="flex items-center justify-center relative group xl:w-[50%] lg:w-[70%] md:w-full">
                <img
                  src={KelahKeluh}
                  className="w-full h-full object-cover rounded-2xl"
                  alt=""
                />
                <div className="absolute md:hidden xl:flex gap-3 justify-center items-center group-hover:bg-black/20 w-full h-full invisible group-hover:visible group-hover:cursor-pointer transition-all duration-300 rounded-2xl">
                  <a
                    href="https://kelah-keluh.vercel.app/"
                    target="_blank"
                    className="text-3xl group-hover:text-black group-hover:bg-white/80  group-hover:backdrop-blur-sm px-8 py-2 rounded-full backdrop-blur-0 text-transparent transition-all duration-300"
                  >
                    VIEW
                  </a>
                  <a
                    href="https://github.com/yudhiazhr/web-kelah-keluh"
                    target="_blank"
                    className="text-3xl group-hover:text-black group-hover:bg-white/80  group-hover:backdrop-blur-sm px-8 py-2 rounded-full backdrop-blur-0 text-transparent transition-all duration-300"
                  >
                    GITHUB
                  </a>
                </div>
                <div className="img-kelah-keluh absolute bottom-0 flex bg-[#F5F7F8] w-full h-full"></div>
              </div>
              <div className="flex xl:flex-col xl:w-[40%] md:flex-row md:w-full md:gap-5 md:order-2 xl:order-1  md:justify-between md:items-center xl:items-stretch">
                <div className="flex md:flex-row xl:flex-col gap-4 ">
                  <div className="overflow-hidden">
                    <h1 className="title-kelah-keluh md:text-5xl lg:text-6xl xl:text-[6.5vw] leading-[100%]">
                      KELAH
                    </h1>
                  </div>
                  <div className="overflow-hidden">
                    <h1 className="title-kelah-keluh md:text-5xl lg:text-6xl xl:text-[6.5vw] leading-[100%] text-end">
                      KELUH
                    </h1>
                  </div>
                </div>

                <div className="button-view-project-kelah-keluh flex xl:hidden gap-2">
                  <a
                    href="https://kelah-keluh.vercel.app/"
                    target="_blank"
                    className=" border-[1px] group text-xl h-full border-black rounded-full flex justify-center items-center gap-2 px-6 py-2 hover:bg-blue-700 transition-all duration-300 hover:text-white"
                  >
                    <svg
                      className="group-hover:text-white transition-all duration-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      color="#000000"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M18 14v4.8a1.2 1.2 0 0 1-1.2 1.2H5.2A1.2 1.2 0 0 1 4 18.8V7.2A1.2 1.2 0 0 1 5.2 6h4.6m4.4-2H20v5.8m-7.9 2L20 4.2"
                      ></path>
                    </svg>
                    VIEW
                  </a>
                  <a
                    href="https://github.com/yudhiazhr/web-kelah-keluh"
                    target="_blank"
                    className=" border-[1px] group text-xl h-full border-black rounded-full flex justify-center items-center gap-2 px-6 py-2 hover:bg-black transition-all duration-300 hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      color="#000000"
                      fill="none"
                      className="group-hover:text-white transition-all duration-300"
                    >
                      <path
                        d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    GITHUB
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact */}
      <GetInTouch />
    </>
  );
};