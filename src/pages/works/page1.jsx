export const Project = () => {
  return (
    <>
      <section className="min-h-dvh flex flex-col justify-center items-center">
        <h1 className="text-[10vw] leading-[100%]">FEATURED</h1>
        <div className="flex gap-3 ">
          <h1 className="text-[10vw] leading-[100%] pl-[500px]">PROJECT</h1>
        </div>
      </section>

      {/* Project */}
      <section className="min-h-dvh flex gap-8 flex-col p-10">
        <div className="project-1 mb-80">
          <div className=" border-t-2 border-black py-3">
            <div className="flex justify-between text-md ">
              <h1>01</h1>
              <div className="border-2 h-8 border-black rounded-full flex justify-center items-center px-6">
                WEBSITE
              </div>
              <h1>WEBSITE APA NIHHH</h1>
              <div className="flex flex-col text-md">
                <h1>NEXT JS</h1>
                <h1>TAILWIND CSS</h1>
                <h1>CHART JS</h1>
                <h1>GSAP</h1>
              </div>
            </div>
          </div>

          <div className="flex gap-8 w-full mt-10">
            <div className="flex flex-col w-[40%] justify-end ">
              <h1 className="text-[6.5vw] leading-[100%]">FEATURED</h1>
              <h1 className="text-[6.5vw] leading-[100%] text-end">PROJECT</h1>
            </div>
            <div className="w-[60%]">
              <img
                src="https://via.placeholder.com/951x550"
                className="w-full rounded-2xl"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="project-2 mb-80">
          <div className=" border-t-2 border-black py-3">
            <div className="flex justify-between text-md ">
              <h1>01</h1>
              <div className="border-2 h-8 border-black rounded-full flex justify-center items-center px-6">
                WEBSITE
              </div>
              <h1>WEBSITE APA NIHHH</h1>
              <div className="flex flex-col text-md">
                <h1>NEXT JS</h1>
                <h1>TAILWIND CSS</h1>
                <h1>CHART JS</h1>
                <h1>GSAP</h1>
              </div>
            </div>
          </div>

          <div className="flex gap-8 w-full mt-10">
            <div className="w-[60%]">
              <img
                src="https://via.placeholder.com/951x550"
                className="w-full rounded-2xl"
                alt=""
              />
            </div>
            <div className="flex flex-col w-[40%] justify-end ">
              <h1 className="text-[6.5vw] leading-[100%]">FEATURED</h1>
              <h1 className="text-[6.5vw] leading-[100%] text-end">PROJECT</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
