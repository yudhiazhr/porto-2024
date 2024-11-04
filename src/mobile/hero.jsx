export const HeroMobile = () => {
  return (
    <>
      {/* Hero */}
      <section
        id="home"
        className="md:hidden min-h-dvh flex flex-col p-3 pt-20"
      >
        <div className=" w-full overflow-hidden">
          <h1 className="text-reveal text-center pr-28 text-[11vw] transform scale-x-[1.4] scale-[1.2] font-semibold leading-[130%]">
            YUDHI
          </h1>
        </div>
        <div className=" w-full overflow-hidden">
          <h1 className="text-reveal mr-20 sm:mr-32 text-[11vw] transform scale-x-[1.4] scale-[1.2] font-semibold text-end leading-[130%]">
            AZHARI
          </h1>
        </div>
        <div className="flex py-4 justify-center relative">
          <img
            src="https://media2.giphy.com/media/a5viI92PAF89q/200w.gif?cid=6c09b952kvioi2f4yduu2uhxy8ifqkiucnu737h6tvejpuvn&ep=v1_gifs_search&rid=200w.gif&ct=g"
            alt=""
            className=" w-full h-[200px] sm:h-[300px] object-cover rounded-sm"
          />
          <div className="absolute img-hero-reveal bg-[#F5F7F8] w-full h-full"></div>
        </div>
        <div className="  w-full overflow-hidden">
          <h1 className=" text-reveal text-center mr-7 sm:pl-0 text-[11vw] transform scale-x-[1.4]  scale-[1.2] font-semibold  leading-[130%]">
            FRONTEND
          </h1>
        </div>
        <div className="  w-full overflow-hidden">
          <h1 className=" text-reveal text-center  sm:pl-8 text-[11vw] transform scale-x-[1.4]  scale-[1.2] font-semibold  leading-[130%]">
            DEVELOPER
          </h1>
        </div>
        <div className="  w-full overflow-hidden">
          <h1 className=" text-reveal text-center mr-7 sm:pl-0 text-[11vw] transform scale-x-[1.4]  scale-[1.2] font-semibold  leading-[130%]">
            PORTFOLIO
          </h1>
        </div>
        <div className="w-full flex justify-centeritems-center text-center py-4 px-8">
          <p className="text-reveal-desc text-md text-start font-[400]">
            Hi! I am Yudhi, a frontend developer based in Jakarta, I&apos;m
            passionate in web development and exploring the world of coding is
            like an adventure for me, where every line of code is a step towards
            greater achievements.
          </p>
        </div>

        <div className="flex justify-around gap-24 overflow-hidden w-full">
          <h1 className=" text-reveal  text-[11vw]  transform  leading-[100%] font-semibold ">
            -INA
          </h1>
          <div className="flex items-center gap-2 overflow-hidden  ">
            <div className="text-reveal h-6 w-6  rounded-full bg-black"></div>
            <div className=" text-reveal text-[11vw] transform  leading-[100%]  font-semibold ">
              2024
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
