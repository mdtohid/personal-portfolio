import React, { useEffect, useState } from "react";
import img1 from "../../img/Screenshot 2023-05-26 162618.png";
import img2 from "../../img/DrilledProject.png";
import img3 from "../../img/DreamFruitProject.png";
import "./Projects.css";
import { Link } from "react-router-dom";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import projectX from "../../img/projectX.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
const Projects = () => {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div id="projects" className="py-20">
      <div className="flex items-center">
        <hr className="w-8 border-[#01d293] me-1" />
        <span className="text-[#01d293] text-xl my-5">Projects</span>
      </div>
      <h1 className="text-4xl my-5 text-center text-[#fff]">My Projects</h1>
      <p className="text-xl mb-10 text-center">
        These are Some of my recent projects done past 5-6 months.
      </p>

      <div className="grid grid-cols-2 gap-5  w-full">
        <div className="bg-[#1c1c1c] hover:bg-[#111111] pt-[2rem] pl-[2rem] rounded-lg opacity-95 hover:opacity-100 transition ease-in-out delay-150 shadow-xl hover:skew-x-[2deg]">
          {/* header part */}
          <div className="flex flex-row justify-between mb-16 pe-[2rem] ">
            <p>NetBook</p>
            <div className="flex gap-3">
              <button className="text-sm px-4 py-1 border border-black/50 rounded-xl">
                github
              </button>
              <button className="text-sm px-4 py-1 border border-black/50 rounded-xl">
                github
              </button>
              <button className="text-sm px-4 py-1 border border-black/50 rounded-xl">
                github
              </button>
            </div>
          </div>
          {/* image part */}
          <div className="flex flex-row justify-between items-end">
            <button className="p-2 mb-[2rem] rounded-full border border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 256 256"
              >
                <path
                  fill="white"
                  d="m224.49 136.49l-72 72a12 12 0 0 1-17-17L187 140H40a12 12 0 0 1 0-24h147l-51.49-51.52a12 12 0 0 1 17-17l72 72a12 12 0 0 1-.02 17.01"
                ></path>
              </svg>
            </button>
            <img className="w-8/12" src={projectX} alt="" />
          </div>
        </div>

        <div className="bg-[#1c1c1c] hover:bg-[#111111] pt-[2rem] pl-[2rem] rounded-lg opacity-95 hover:opacity-100 transition ease-in-out delay-150 shadow-xl">
          {/* header part */}
          <div className="flex flex-row justify-between mb-16 pe-[2rem] ">
            <p>NetBook</p>
            <div className="flex gap-3">
              <button className="text-sm px-4 py-1 border border-black/50 rounded-xl">
                github
              </button>
              <button className="text-sm px-4 py-1 border border-black/50 rounded-xl">
                github
              </button>
              <button className="text-sm px-4 py-1 border border-black/50 rounded-xl">
                github
              </button>
            </div>
          </div>
          {/* image part */}
          <div className="flex flex-row justify-between items-end">
            <button className="p-2 mb-[2rem] rounded-full border border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 256 256"
              >
                <path
                  fill="white"
                  d="m224.49 136.49l-72 72a12 12 0 0 1-17-17L187 140H40a12 12 0 0 1 0-24h147l-51.49-51.52a12 12 0 0 1 17-17l72 72a12 12 0 0 1-.02 17.01"
                ></path>
              </svg>
            </button>
            <img className="w-8/12" src={projectX} alt="" />
          </div>
        </div>

        <div className="bg-[#1c1c1c] hover:bg-[#111111] pt-[2rem] pl-[2rem] rounded-lg opacity-95 hover:opacity-100 transition ease-in-out delay-150 shadow-xl">
          {/* header part */}
          <div className="flex flex-row justify-between mb-16 pe-[2rem] ">
            <p>NetBook</p>
            <div className="flex gap-3">
              <button className="text-sm px-4 py-1 border border-black/50 rounded-xl">
                github
              </button>
              <button className="text-sm px-4 py-1 border border-black/50 rounded-xl">
                github
              </button>
              <button className="text-sm px-4 py-1 border border-black/50 rounded-xl">
                github
              </button>
            </div>
          </div>
          {/* image part */}
          <div className="flex flex-row justify-between items-end">
            <button className="p-2 mb-[2rem] rounded-full border border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 256 256"
              >
                <path
                  fill="white"
                  d="m224.49 136.49l-72 72a12 12 0 0 1-17-17L187 140H40a12 12 0 0 1 0-24h147l-51.49-51.52a12 12 0 0 1 17-17l72 72a12 12 0 0 1-.02 17.01"
                ></path>
              </svg>
            </button>
            <img className="w-8/12" src={projectX} alt="" />
          </div>
        </div>

        <div className="bg-[#1c1c1c] hover:bg-[#111111] pt-[2rem] pl-[2rem] rounded-lg opacity-95 hover:opacity-100 transition ease-in-out delay-150 shadow-xl">
          {/* header part */}
          <div className="flex flex-row justify-between mb-16 pe-[2rem] ">
            <p>NetBook</p>
            <div className="flex gap-3">
              <button className="text-sm px-4 py-1 border border-black/50 rounded-xl">
                github
              </button>
              <button className="text-sm px-4 py-1 border border-black/50 rounded-xl">
                github
              </button>
              <button className="text-sm px-4 py-1 border border-black/50 rounded-xl">
                github
              </button>
            </div>
          </div>
          {/* image part */}
          <div className="flex flex-row justify-between items-end">
            <button className="p-2 mb-[2rem] rounded-full border border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 256 256"
              >
                <path
                  fill="white"
                  d="m224.49 136.49l-72 72a12 12 0 0 1-17-17L187 140H40a12 12 0 0 1 0-24h147l-51.49-51.52a12 12 0 0 1 17-17l72 72a12 12 0 0 1-.02 17.01"
                ></path>
              </svg>
            </button>
            <img className="w-8/12" src={projectX} alt="" />
          </div>
        </div>
      </div>

      {/* <>
        <Swiper
          slidesPerView={
            (deviceWidth < 613 && 1) ||
            (deviceWidth < 900 && 2) ||
            (deviceWidth > 900 && 3)
          }
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper bullet p-20 lg:p-0"
        >
          <SwiperSlide>
            <div className="projectImg ">
              <img src={img1} alt="" />
              <div className="projectContent flex flex-col items-center justify-center gap-3">
                <div className="flex items-center justify-center gap-3">
                  <Link
                    target="_blank"
                    to={"https://mdtohid.github.io/Netbook-website/"}
                    className="btn btn-sm btn-success"
                  >
                    Live link
                  </Link>
                  <Link
                    target="_blank"
                    to={"https://github.com/mdtohid/Netbook-website"}
                    className="btn btn-sm btn-warning"
                  >
                    Client code link
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="projectImg">
              <img src={img2} alt="" />
              <div className="projectContent flex flex-col items-center justify-center gap-3">
                <div className="flex items-center justify-center gap-3">
                  <Link
                    target="_blank"
                    to={"https://assignment-12-4ff33.web.app/"}
                    className="btn btn-sm btn-success"
                  >
                    Live link
                  </Link>
                  <Link
                    target="_blank"
                    to={"https://github.com/mdtohid/Trs-project-client-side"}
                    className="btn btn-sm btn-warning"
                  >
                    Client code link
                  </Link>
                </div>
                <Link
                  target="_blank"
                  to={"https://github.com/mdtohid/Trs-project-server-side"}
                  className="btn btn-sm btn-error"
                >
                  Server code link
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="projectImg">
              <img src={img3} alt="" />
              <div className="projectContent flex flex-col items-center justify-center gap-3">
                <div className="flex items-center justify-center gap-3">
                  <Link
                    target="_blank"
                    to={"https://assignment-11-client-sid-371c0.web.app/"}
                    className="btn btn-sm btn-success"
                  >
                    Live link
                  </Link>
                  <Link
                    target="_blank"
                    to={"https://github.com/mdtohid/Dream-Fruit"}
                    className="btn btn-sm btn-warning"
                  >
                    Client code link
                  </Link>
                </div>
                <Link
                  target="_blank"
                  to={"https://github.com/mdtohid/Dream-Fruit-server-side"}
                  className="btn btn-sm btn-error"
                >
                  Server code link
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </> */}
    </div>
  );
};

export default Projects;
