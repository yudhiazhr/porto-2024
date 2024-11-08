import { useEffect } from "react";
import KelahKeluh from "../../src/assets/kelah-keluh.png";
import OPS from "../../src/assets/operating-placement-system.png";
import SiapaVote from "../../src/assets/siapa-vote.png";
import WordCloud from "../../src/assets/word-cloud.png";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

export const ProjectMobile = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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

  return (
    <>
      <div className="flex md:hidden flex-col gap-3">
        <div className="wrapper-img flex items-center justify-center relative group w-full">
          <img src={SiapaVote} className="w-full rounded-sm" alt="" />

          <div className="img-project-mobile-1 absolute bottom-0 flex bg-[#F5F7F8] w-full h-full"></div>
        </div>
        <div className=" flex justify-between">
          <div className="overflow-hidden">
            <h1 className="mobile-title-project-1 text-xl font-semibold">SIAPA VOTE</h1>
          </div>

          <div className="button-project-mobile-1 flex gap-2">
            <a
              href="https://siapa-vote.vercel.app/"
              target="_blank"
              className="cursor-pointer border-[1px] group text-sm h-full border-black rounded-full flex justify-center items-center gap-2 px-4 py-1 hover:bg-blue-700 transition-all duration-300 hover:text-white"
            >
              <svg
                className="group-hover:text-white transition-all duration-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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
              className="cursor-pointer border-[1px] group text-sm h-full border-black rounded-full flex justify-center items-center gap-2 px-4 py-1 hover:bg-black transition-all duration-300 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
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

      <div className="flex md:hidden flex-col gap-3">
        <div className="wrapper-img-2 flex items-center justify-center relative group w-full">
          <img src={OPS} className="w-full rounded-sm" alt="" />

          <div className="img-project-mobile-2 absolute bottom-0 flex bg-[#F5F7F8] w-full h-full"></div>
        </div>
        <div className="flex justify-between items-center">
          <div className="overflow-hidden">
            <p className="mobile-title-project-2 text-xl font-semibold">OPERATING PLACEMENT SYSTEM</p>
          </div>
          <div className="button-project-2 flex gap-2">
            <a
              href="https://operating-placement-system.vercel.app/"
              target="_blank"
              className="cursor-pointer border-[1px] group text-sm h-full border-black rounded-full flex justify-center items-center gap-2 px-4 py-1 hover:bg-blue-700 transition-all duration-300 hover:text-white"
            >
              <svg
                className="group-hover:text-white transition-all duration-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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
              className="cursor-pointer border-[1px] group text-sm h-full border-black rounded-full flex justify-center items-center gap-2 px-4 py-1 hover:bg-black transition-all duration-300 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
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

      <div className="flex md:hidden flex-col gap-3">
        <div className="flex items-center justify-center relative group w-full">
          <img src={WordCloud} className="w-full rounded-sm" alt="" />

          <div className="img-project-mobile-3 absolute bottom-0 flex bg-[#F5F7F8] w-full h-full"></div>
        </div>
        <div className="flex justify-between">
          <div className="overflow-hidden">
            <p className="text-xl font-semibold">WORD CLOUD</p>
          </div>
          <div className="button-project-3 flex gap-2">
            <a
              href="https://word-clouds.vercel.app/"
              target="_blank"
              className="cursor-pointer border-[1px] group text-sm h-full border-black rounded-full flex justify-center items-center gap-2 px-4 py-1 hover:bg-blue-700 transition-all duration-300 hover:text-white"
            >
              <svg
                className="group-hover:text-white transition-all duration-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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
              className="cursor-pointer border-[1px] group text-sm h-full border-black rounded-full flex justify-center items-center gap-2 px-4 py-1 hover:bg-black transition-all duration-300 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
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

      <div className="flex md:hidden flex-col gap-3">
        <div className=" flex items-center justify-center relative group w-full">
          <img src={KelahKeluh} className="w-full rounded-sm" alt="" />

          <div className="img-project-mobile-4 absolute bottom-0 flex bg-[#F5F7F8] w-full h-full"></div>
        </div>
        <div className="flex justify-between">
          <div className="overflow-hidden">
            <p className="text-xl font-semibold">KELAH KELUH</p>
          </div>
          <div className="button-project-3 flex gap-2">
            <a
              href="https://kelah-keluh.vercel.app/"
              target="_blank"
              className="cursor-pointer border-[1px] group text-sm h-full border-black rounded-full flex justify-center items-center gap-2 px-4 py-1 hover:bg-blue-700 transition-all duration-300 hover:text-white"
            >
              <svg
                className="group-hover:text-white transition-all duration-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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
              className="cursor-pointer border-[1px] group text-sm h-full border-black rounded-full flex justify-center items-center gap-2 px-4 py-1 hover:bg-black transition-all duration-300 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
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
    </>
  );
};
