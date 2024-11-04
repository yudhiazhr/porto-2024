import { useEffect } from "react";
import { useState } from "react";

export const GetInTouch = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  return (
    <>
      {/* LETS TALK */}
      <section className="relative min-h-3 flex items-center gap-6 bg-black text-white p-3 xl:p-10 xl:pt-20 ">
        <div className="flex w-full xl:w-1/2">
          <h1 className="text-2xl xl:text-6xl">
            FOR ANY COLLABORATIVE 
            PROJECTS OR INQUIRIES, FEEL 
            FREE TO REACH OUT
            TO ME.
          </h1>
        </div>
      </section>

      <section className="min-h-32 xl:h-dvh flex flex-col p-3 xl:p-10 bg-black text-white">
        <div className="flex flex-col xl:flex-row w-full gap-6 xl:gap-12">
          <div className="flex flex-col text-white w-full order-2 lg:order-1  xl:w-[25%]">
            <h1 className="text-base xl:text-xl py-4 xl:py-6">Social Media:</h1>
            <a
              href="mailto:m.yudhiazhari@gmail.com"
              className="group flex justify-between items-center border-y-[1px] border-white py-[3px] xl:py-3 hover:px-3 hover:bg-white hover:text-black  transition-all duration-300"
            >
              <h1 className="text-base xl:text-xl ">Gmail</h1>
              <svg
                className="w-3 h-3 group-hover:rotate-45 transition duration-300 group-hover:text-black "
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7.5L7.5 1M7.5 1V6.5M7.5 1H1.5"
                  stroke="currentColor"
                ></path>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/yudhiazhr/"
              target="_blank"
              className="group flex justify-between items-center border-b-[1px] border-white py-[3px] xl:py-3 hover:px-3 hover:bg-white hover:text-black  transition-all duration-300"
            >
              <h1 className="text-base xl:text-xl ">Linkedin</h1>
              <svg
                className="w-3 h-3 group-hover:rotate-45 transition duration-300 group-hover:text-black "
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7.5L7.5 1M7.5 1V6.5M7.5 1H1.5"
                  stroke="currentColor"
                ></path>
              </svg>
            </a>

            <a
              href="https://www.instagram.com/yudhiazhr"
              target="_blank"
              className="group flex justify-between items-center border-b-[1px] border-white py-[3px] xl:py-3 hover:px-3 hover:bg-white hover:text-black  transition-all duration-300"
            >
              <h1 className="text-base xl:text-xl ">Instagram</h1>
              <svg
                className="w-3 h-3 group-hover:rotate-45 transition duration-300 group-hover:text-black "
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7.5L7.5 1M7.5 1V6.5M7.5 1H1.5"
                  stroke="currentColor"
                ></path>
              </svg>
            </a>

            <a
              href="https://github.com/yudhiazhr"
              target="_blank"
              className="group flex justify-between items-center border-b-[1px] border-white py-[3px] xl:py-3 hover:px-3 hover:bg-white hover:text-black  transition-all duration-300"
            >
              <h1 className="text-base xl:text-xl ">Github</h1>
              <svg
                className="w-3 h-3 group-hover:rotate-45 transition duration-300 group-hover:text-black "
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7.5L7.5 1M7.5 1V6.5M7.5 1H1.5"
                  stroke="currentColor"
                ></path>
              </svg>
            </a>
          </div>


          <div className="flex flex-col text-white w-full order-1 lg:order-2">
            <h1 className="text-sm xl:text-xl py-3 xl:py-6">Menu:</h1>
            <div className="flex justify-between items-center border-y-[1px] border-white py-3 cursor-pointer">
              <a href="" className="text-[18vw] xl:text-[220px] leading-[100%] mt-[-15px] xl:mt-[-30px] ">Home</a>
            </div>
            <div className="flex justify-between items-center border-b-[1px] border-white py-3 cursor-pointer">
              <a href="" className="text-[18vw] xl:text-[220px] leading-[100%] mt-[-15px] xl:mt-[-30px] ">About</a>
            </div>
            <div className="flex justify-between items-center border-b-[1px] border-white py-3 cursor-pointer">
              <a href="" className="text-[18vw] xl:text-[220px] leading-[100%] mt-[-15px] xl:mt-[-30px] ">
                Projects
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-auto py-8 xl:py-0 ">
          <h1 className="flex text-[12px] xl:text-lg">{formattedTime} - Jakarta, INA</h1>
          <h1 className="text-[12px] xl:text-lg ">Made with ❤ by yudhiazhr</h1>
        </div>
      </section>
    </>
  );
};
