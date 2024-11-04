import { useState } from "react";
import KelahKeluh from "../../src/assets/kelah-keluh.png";
import OPS from "../../src/assets/operating-placement-system.png";
import SiapaVote from "../../src/assets/siapa-vote.png";
import WordCloud from "../../src/assets/word-cloud.png";

export const ProjectMobile = () => {

  const [barCount, setBarCount] = useState(7)

  useState(() => {
    const updateBarCount = () => {
      setBarCount(window.innerWidth >= 520 ? 11 : 7)
    }

    updateBarCount()

    window.addEventListener("resize", updateBarCount)

    return () => {
      window.removeEventListener('resize', updateBarCount)
    }
  })

  return (
    <>
      <section className="title-project relative overflow-hidden min-h-[100dvh] flex md:hidden justify-center items-center gap-6 px-3 mt-12 ">
      {Array.from({ length: barCount }).map((_, index) => (
        <div
          key={index}
          className="bg-black w-10 h-[100dvh] looping-bar rounded-sm"
        ></div>
      ))}
      </section>

      <section className="min-h-dvh w-full p-3  flex md:hidden flex-col my-24 gap-6 overflow-hidden">
        <div className="container-selected-project flex flex-col w-full overflow-hidden">
          <h1 className="text-selected-project text-3xl leading-[90%] font-semibold ">
            SELECTED
          </h1>
          <h1 className="text-selected-project text-3xl leading-[90%] font-semibold ">
            PROJECT
          </h1>
        </div>

        <div className="flex flex-col gap-3">
          <div className=" flex items-center justify-center relative group w-full">
            <img src={SiapaVote} className="w-full rounded-sm" alt="" />
            <div className="absolute flex justify-center items-center group-hover:bg-black/20 w-full h-full invisible group-hover:visible group-hover:cursor-pointer transition-all duration-300 rounded-sm">
              <a
                href=""
                className="text-base group-hover:text-black group-hover:bg-white/80  group-hover:backdrop-blur-sm px-4 py-1 rounded-full backdrop-blur-0 text-transparent transition-all duration-300"
              >
                VIEW
              </a>
            </div>
            <div className="img-project-1 absolute flex bg-[#F5F7F8] w-full h-full"></div>
          </div>
          <div className="flex justify-between">
            <p className="text-xl font-semibold">SIAPA VOTE</p>
            <h1 className="border-[1px] border-black/50 rounded-full h-7 text-[12px] px-3 flex justify-center items-center">
              WEBSITE
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className=" flex items-center justify-center relative group w-full">
            <img src={OPS} className="w-full rounded-sm" alt="" />
            <div className="absolute flex justify-center items-center group-hover:bg-black/20 w-full h-full invisible group-hover:visible group-hover:cursor-pointer transition-all duration-300 rounded-sm">
              <a
                href=""
                className="text-base group-hover:text-black group-hover:bg-white/80  group-hover:backdrop-blur-sm px-4 py-1 rounded-full backdrop-blur-0 text-transparent transition-all duration-300"
              >
                VIEW
              </a>
            </div>
            <div className="img-project-1 absolute flex bg-[#F5F7F8] w-full h-full"></div>
          </div>
          <div className="flex justify-between">
            <p className="text-xl font-semibold">OPERATING PLACEMENT SYSTEM</p>
            <h1 className="border-[1px] border-black/50 rounded-full h-7 text-[12px] px-3 flex justify-center items-center">
              WEBSITE
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className=" flex items-center justify-center relative group w-full">
            <img src={WordCloud} className="w-full rounded-sm" alt="" />
            <div className="absolute flex justify-center items-center group-hover:bg-black/20 w-full h-full invisible group-hover:visible group-hover:cursor-pointer transition-all duration-300 rounded-sm">
              <a
                href=""
                className="text-base group-hover:text-black group-hover:bg-white/80  group-hover:backdrop-blur-sm px-4 py-1 rounded-full backdrop-blur-0 text-transparent transition-all duration-300"
              >
                VIEW
              </a>
            </div>
            <div className="img-project-1 absolute flex bg-[#F5F7F8] w-full h-full"></div>
          </div>
          <div className="flex justify-between">
            <p className="text-xl font-semibold">WORD CLOUD</p>
            <h1 className="border-[1px] border-black/50 rounded-full h-7 text-[12px] px-3 flex justify-center items-center">
              WEBSITE
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className=" flex items-center justify-center relative group w-full">
            <img src={KelahKeluh} className="w-full rounded-sm" alt="" />
            <div className="absolute flex justify-center items-center group-hover:bg-black/20 w-full h-full invisible group-hover:visible group-hover:cursor-pointer transition-all duration-300 rounded-sm">
              <a
                href=""
                className="text-base group-hover:text-black group-hover:bg-white/80  group-hover:backdrop-blur-sm px-4 py-1 rounded-full backdrop-blur-0 text-transparent transition-all duration-300"
              >
                VIEW
              </a>
            </div>
            <div className="img-project-1 absolute flex bg-[#F5F7F8] w-full h-full"></div>
          </div>
          <div className="flex justify-between">
            <p className="text-xl font-semibold">KELAH KELUH</p>
            <h1 className="border-[1px] border-black/50 rounded-full h-7 text-[12px] px-3 flex justify-center items-center">
              WEBSITE
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};
