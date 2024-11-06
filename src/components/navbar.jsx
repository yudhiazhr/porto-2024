import { useEffect, useState } from "react";

export const Navbar = () => {
  const [time, setTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });



  return (
    <>
      <header
        className={`fixed bg-transparent top-0 left-0 w-full flex items-center z-10 p-3 xl:px-10 xl:pt-5 xl:pb-2 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full flex items-center justify-between border-b-[1px] border-black/50 pb-2">
          <h1 className="flex text-sm xl:text-lg font-semibold">{formattedTime}</h1>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            
            color="#000000"
            fill="none"

            className="w-6 h-6 xl:w-8 xl:h-8"
          >
            <path
              d="M4 5H5.04362C6.96246 5 7.92187 5 8.67328 5.49548C9.42469 5.99095 9.80263 6.8728 10.5585 8.63648L13.4415 15.3635C14.1974 17.1272 14.5753 18.009 15.3267 18.5045C16.0781 19 17.0375 19 18.9564 19H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M14 5H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

        <a href="#contact">
          <button className=" text-sm xl:text-lg font-semibold">CONTACT</button>
        </a>
        </div>
      </header>
    </>
  );
};
