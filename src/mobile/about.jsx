import HeroImg from "../../src/assets/yuds.jpeg";

export const AboutMobile = () => {
  return (
    <>
      <section className="about-section min-h-dvh md:hidden flex flex-col px-3   pt-20  overflow-hidden">
        <div className="flex flex-col gap-6">
          <div className="relative flex">
            <img
              src={HeroImg}
              className=" w-full h-[500px] object-cover rounded-sm "
              alt=""
            />
            <div className="absolute bottom-0 img-reveal-about bg-[#F5F7F8] w-full h-full"></div>
          </div>

          <div className="wrapper-text-reveal-about-mobile" >
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

          <div className="flex w-full ">
              <p className="text-reveal-about-mobile-desc text-md sm:text-lg font-[400]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis illo earum culpa iure animi repellendus sequi
                perspiciatis, labore id ipsum voluptatibus commodi obcaecati
                alias perferendis rerum nostrum porro, odio consequuntur.
              </p>
            </div>
        </div>
      </section>
    </>
  );
};
