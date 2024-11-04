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
            duration: 2,
          },
          1.8
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
        );

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
            y: 302,
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
            y: 302,
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
            y: 302,
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
    });

    const updateArrayLength = () => {
      if (window.innerWidth >= 768 && window.innerWidth < 1024) {
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
        id="home"
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
      <AboutMobile />
      <section className=" min-h-dvh hidden md:flex flex-col md:px-3 lg:px-10 overflow-hidden">
        <div className="md:flex md:flex-col lg:grid lg:grid-cols-2">
          <div className="relative flex ">
            <img
              src={HeroImg}
              className=" about-section lg:w-[730px] lg:h-[800px] md:w-full md:h-[430px] object-cover rounded-xl"
              alt=""
            />
            <div className="absolute bottom-0 img-reveal-about bg-[#F5F7F8] lg:w-[730px] lg:h-[1000px] md:w-full md:h-[430px]"></div>
          </div>
          <div className=" grid grid-rows-2 pt-8">
            <div
              id="wrapper-text-reveal-about"
              className="lg:flex flex-col md:hidden"
            >
              <div className="overflow-hidden">
                <h1 className="text-reveal-about md:text-[64px] lg:text-[96px] leading-[100%] uppercase">
                  I craft beautiful
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="text-reveal-about md:text-[64px] lg:text-[96px] leading-[100%] uppercase">
                  experiences &
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="text-reveal-about md:text-[64px] lg:text-[96px] leading-[100%] uppercase">
                  attractive
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="text-reveal-about md:text-[64px] lg:text-[96px] leading-[100%] uppercase">
                  modern website
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="text-reveal-about md:text-[64px] lg:text-[96px] leading-[100%] uppercase">
                  with GSAP
                </h1>
              </div>
            </div>

            <div className=" flex-col lg:hidden md:flex sm:hidden">
              <div className="overflow-hidden">
                <h1 className="text-reveal-about md:text-[48px] leading-[100%] uppercase">
                  I craft beautiful
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="text-reveal-about md:text-[48px] leading-[100%] uppercase">
                  experiences & attractive
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="text-reveal-about md:text-[48px] leading-[100%] uppercase">
                  modern website using
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="text-reveal-about md:text-[48px] leading-[100%] uppercase">
                  GSAP
                </h1>
              </div>
            </div>

            <div className="flex md:justify-start lg:justify-center md:pt-4 lg:pt-24 ">
              <p className="text-reveal-about-desc md:text-lg lg:text-base md:w-full lg:w-[50%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis illo earum culpa iure animi repellendus sequi
                perspiciatis, labore id ipsum voluptatibus commodi obcaecati
                alias perferendis rerum nostrum porro, odio consequuntur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT */}
      <ProjectMobile />
      <section className="title-project relative overflow-hidden min-h-[200dvh] hidden md:flex justify-center items-center gap-12 px-10 ">
        {Array.from({ length: arrayLength }).map((_, index) => (
          <div
            key={index}
            className="bg-black w-20 h-[200dvh] looping-bar rounded-2xl"
          ></div>
        ))}
      </section>

      <section className="min-h-dvh w-full md:p-5 lg:p-10 project-section hidden md:flex flex-col gap-8 overflow-hidden">
        <div className=" wrapper-selected-project inline-flex flex-row md:gap-3 lg:gap-8 md:pt-9 lg:pt-4 w-full overflow-hidden">
          <h1 className="text-selected-project md:text-5xl lg:text-7xl xl:text-[6.5vw] leading-[100%] font-semibold ">
            SELECTED
          </h1>
          <h1 className="text-selected-project md:text-5xl lg:text-7xl xl:text-[6.5vw] leading-[100%] font-semibold ">
            PROJECT
          </h1>
        </div>
        <div className="flex gap-8 w-[388.6vw] inner-container pb-24">
          {/* SIAPA VOTE */}
          <div className="siapa-vote flex flex-col  w-[95.4dvw] ">
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

                <div className="flex xl:hidden gap-4">
                  <div className=" border-[1px] h-full border-black rounded-full flex justify-center items-center px-6 py-2">
                    VIEW
                  </div>
                  <div className=" border-[1px] h-full border-black rounded-full flex justify-center items-center px-6 py-2">
                    GITHUB
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-center relative group xl:w-[50%] lg:w-[70%] md:w-full  md:order-1 xl:order-2">
                <img src={SiapaVote} className="w-full h-full object-cover rounded-2xl" alt="" />
                <div className="absolute flex justify-center items-center group-hover:bg-black/20 w-full h-full invisible group-hover:visible group-hover:cursor-pointer transition-all duration-300 rounded-2xl">
                  <a
                    href=""
                    className="text-3xl group-hover:text-black group-hover:bg-white/80  group-hover:backdrop-blur-sm px-8 py-2 rounded-full backdrop-blur-0 text-transparent transition-all duration-300"
                  >
                    VIEW
                  </a>
                </div>
                <div className="img-project-1 absolute bottom-0 flex bg-[#F5F7F8] w-full h-full"></div>
              </div>
            </div>
          </div>

          {/* OPS */}
          <div className="ops flex flex-col  w-[95.4dvw] ">
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
                  <h1>CHART JS</h1>
                  <h1>GSAP</h1>
                </div>
              </div>
            </div>

            <div className="wrapper-ops flex justify-between gap-8 w-full mt-3">
              <div className="flex items-center justify-center relative group w-[50%]">
                <img src={OPS} className="w-full rounded-2xl" alt="" />
                <div className="absolute flex justify-center items-center group-hover:bg-black/20 w-full h-full invisible group-hover:visible group-hover:cursor-pointer transition-all duration-300 rounded-2xl">
                  <a
                    href=""
                    className="text-3xl group-hover:text-black group-hover:bg-white/80  group-hover:backdrop-blur-sm px-8 py-2 rounded-full backdrop-blur-0 text-transparent transition-all duration-300"
                  >
                    VIEW
                  </a>
                </div>
                <div className="img-ops absolute flex bg-[#F5F7F8] w-full h-full"></div>
              </div>
              <div className="flex flex-col w-[40%] justify-start ">
                <div className="overflow-hidden">
                  <h1 className="title-ops text-[6.5vw] leading-[100%]">
                    PLACEMENT
                  </h1>
                </div>
                <div className="overflow-hidden">
                  <h1 className="title-ops text-[6.5vw] leading-[100%] text-end">
                    SYSTEM
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* WORD CLOUD */}
          <div className="word-cloud flex flex-col  w-[95.4dvw] ">
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

            <div className="wrapper-word-cloud flex justify-between  gap-8 w-full mt-3">
              <div className="flex flex-col w-[40%] justify-end ">
                <div className="overflow-hidden">
                  <h1 className="title-word-cloud text-[6.5vw] leading-[100%]">
                    WORD
                  </h1>
                </div>
                <div className="overflow-hidden">
                  <h1 className="title-word-cloud text-[6.5vw] leading-[100%] text-end">
                    CLOUD WEB
                  </h1>
                </div>
              </div>
              <div className="flex items-center justify-center relative group w-[50%]">
                <img src={WordCloud} className="w-full rounded-2xl" alt="" />
                <div className="absolute flex justify-center items-center group-hover:bg-black/20 w-full h-full invisible group-hover:visible group-hover:cursor-pointer transition-all duration-300 rounded-2xl">
                  <a
                    href=""
                    className="text-3xl group-hover:text-black group-hover:bg-white/80  group-hover:backdrop-blur-sm px-8 py-2 rounded-full backdrop-blur-0 text-transparent transition-all duration-300"
                  >
                    VIEW
                  </a>
                </div>
                <div className="img-word-cloud absolute flex bg-[#F5F7F8] w-full h-full"></div>
              </div>
            </div>
          </div>

          {/* KELAH-KELUH */}
          <div className="kelah-keluh flex flex-col  w-[95.4dvw] ">
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

            <div className="wrapper-kelah-keluh flex justify-between gap-8 w-full mt-3">
              <div className="flex items-center justify-center relative group w-[50%]">
                <img src={KelahKeluh} className="w-full rounded-2xl" alt="" />
                <div className="absolute flex justify-center items-center group-hover:bg-black/20 w-full h-full invisible group-hover:visible group-hover:cursor-pointer transition-all duration-300 rounded-2xl">
                  <a
                    href=""
                    className="text-3xl group-hover:text-black group-hover:bg-white/80  group-hover:backdrop-blur-sm px-8 py-2 rounded-full backdrop-blur-0 text-transparent transition-all duration-300"
                  >
                    VIEW
                  </a>
                </div>
                <div className="img-kelah-keluh absolute flex bg-[#F5F7F8] w-full h-full"></div>
              </div>
              <div className="flex flex-col w-[40%] justify-start ">
                <div className="overflow-hidden">
                  <h1 className="title-kelah-keluh text-[6.5vw] leading-[100%]">
                    KELAH
                  </h1>
                </div>
                <div className="overflow-hidden">
                  <h1 className="title-kelah-keluh text-[6.5vw] leading-[100%] text-end">
                    KELUH
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
