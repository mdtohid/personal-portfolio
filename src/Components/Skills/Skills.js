import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimationControls } from "framer-motion";
import "./Skills.css";

const Skills = () => {
  const circumference = ((2 * 22) / 7) * 120;
  console.log(circumference);

  const htmlCurrentSkill = 95;
  const cssCurrentSkill = 90;
  const jsCurrentSkill = 90;
  const reactCurrentSkill = 95;
  const nodeCurrentSkill = 53;
  const cssFrameworkCurrentSkill = 95;

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} id="skills" className="py-20">
      <div className="flex items-center">
        <hr className="w-8 border-[#01d293] me-1" />
        <span className="text-[#01d293] text-xl my-5">Skills</span>
      </div>
      <h1 className="text-4xl my-5 text-center text-[#fff]">My Skills</h1>
      <div className="grid grid-cols-3 md:grid-cols-5 flex-none xl:flex  gap-4 mx-auto justify-center ">
        <button className="btn btn-sm rounded-full text-cyan-600">HTML5</button>
        <button className="btn btn-sm rounded-full text-cyan-600">CSS3</button>
        <button className="btn btn-sm rounded-full text-cyan-600">
          Bootstrap
        </button>
        <button className="btn btn-sm rounded-full text-cyan-600">
          Tailwind
        </button>
        <button className="btn btn-sm rounded-full text-cyan-600">
          JavaScript
        </button>
        <button className="btn btn-sm rounded-full text-cyan-600">
          React Js
        </button>
        <button className="btn btn-sm rounded-full text-cyan-600">
          Firebase
        </button>
        <button className="btn btn-sm rounded-full text-cyan-600">
          MongoDB
        </button>
        <button className="btn btn-sm rounded-full text-cyan-600">
          Express Js
        </button>
        <button className="btn btn-sm rounded-full text-cyan-600">
          Node Js
        </button>
      </div>
      <h1 className="text-4xl text-center my-10 text-[#01d293]">
        Highlighted Skills
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
        <div className="card bg-[#1e2231] shadow-xl pb-14">
          <h1 className="text-center text-2xl my-3">HTML</h1>
          <div className="flex items-center justify-center">
            <svg
              className="transform -rotate-90"
              viewBox="0 0 290 290"
              width="250"
              height="250"
            >
              <circle
                cx="145"
                cy="145"
                r="120"
                stroke="currentColor"
                strokeWidth="10"
                fill="transparent"
                className="text-gray-700"
              />
              {isInView && (
                <motion.circle
                  cx="145"
                  cy="145"
                  r="120"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference}
                  animate={{
                    strokeDashoffset: [
                      circumference,
                      circumference - (htmlCurrentSkill / 100) * circumference,
                    ],
                  }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  strokeLinecap="round"
                  className="text-[#0c9c8a]"
                />
              )}
            </svg>
            <span className="absolute text-5xl">{`${htmlCurrentSkill}%`}</span>
          </div>
        </div>

        <div className="card bg-[#1e2231] shadow-xl pb-14">
          <h1 className="text-center text-2xl my-3">CSS</h1>
          <div className="flex items-center justify-center">
            <svg
              className="transform -rotate-90"
              viewBox="0 0 290 290"
              width="250"
              height="250"
            >
              <circle
                cx="145"
                cy="145"
                r="120"
                stroke="currentColor"
                strokeWidth="10"
                fill="transparent"
                className="text-gray-700"
              />
              {isInView && (
                <motion.circle
                  cx="145"
                  cy="145"
                  r="120"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference}
                  animate={{
                    strokeDashoffset: [
                      circumference,
                      circumference - (cssCurrentSkill / 100) * circumference,
                    ],
                  }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  strokeLinecap="round"
                  className="text-[#0c9c8a]"
                />
              )}
            </svg>
            <span className="absolute text-5xl">{`${cssCurrentSkill}%`}</span>
          </div>
        </div>

        <div className="card bg-[#1e2231] shadow-xl pb-14">
          <h1 className="text-center text-2xl my-3">Javascript</h1>
          <div className="flex items-center justify-center">
            <svg
              className="transform -rotate-90"
              viewBox="0 0 290 290"
              width="250"
              height="250"
            >
              <circle
                cx="145"
                cy="145"
                r="120"
                stroke="currentColor"
                strokeWidth="10"
                fill="transparent"
                className="text-gray-700"
              />
              {isInView && (
                <motion.circle
                  cx="145"
                  cy="145"
                  r="120"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference}
                  animate={{
                    strokeDashoffset: [
                      circumference,
                      circumference - (jsCurrentSkill / 100) * circumference,
                    ],
                  }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  strokeLinecap="round"
                  className="text-[#0c9c8a]"
                />
              )}
            </svg>
            <span className="absolute text-5xl">{`${jsCurrentSkill}%`}</span>
          </div>
        </div>

        <div className="card bg-[#1e2231] shadow-xl pb-14">
          <h1 className="text-center text-2xl my-3">React.js</h1>
          <div className="flex items-center justify-center">
            <svg
              className="transform -rotate-90"
              viewBox="0 0 290 290"
              width="250"
              height="250"
            >
              <circle
                cx="145"
                cy="145"
                r="120"
                stroke="currentColor"
                strokeWidth="10"
                fill="transparent"
                className="text-gray-700"
              />
              {isInView && (
                <motion.circle
                  cx="145"
                  cy="145"
                  r="120"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference}
                  animate={{
                    strokeDashoffset: [
                      circumference,
                      circumference - (reactCurrentSkill / 100) * circumference,
                    ],
                  }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  strokeLinecap="round"
                  className="text-[#0c9c8a]"
                />
              )}
            </svg>
            <span className="absolute text-5xl">{`${reactCurrentSkill}%`}</span>
          </div>
        </div>

        <div className="card bg-[#1e2231] shadow-xl pb-14">
          <h1 className="text-center text-2xl my-3">Node.js</h1>
          <div className="flex items-center justify-center">
            <svg
              className="transform -rotate-90"
              viewBox="0 0 290 290"
              width="250"
              height="250"
            >
              <circle
                cx="145"
                cy="145"
                r="120"
                stroke="currentColor"
                strokeWidth="10"
                fill="transparent"
                className="text-gray-700"
              />
              {isInView && (
                <motion.circle
                  cx="145"
                  cy="145"
                  r="120"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference}
                  animate={{
                    strokeDashoffset: [
                      circumference,
                      circumference - (nodeCurrentSkill / 100) * circumference,
                    ],
                  }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  strokeLinecap="round"
                  className="text-[#0c9c8a]"
                />
              )}
            </svg>
            <span className="absolute text-5xl">{`${nodeCurrentSkill}%`}</span>
          </div>
        </div>

        <div className="card bg-[#1e2231] shadow-xl pb-14">
          <h1 className="text-center text-2xl my-3">CSS Framework</h1>
          <div className="flex items-center justify-center">
            <svg
              className="transform -rotate-90"
              viewBox="0 0 290 290"
              width="250"
              height="250"
            >
              <circle
                cx="145"
                cy="145"
                r="120"
                stroke="currentColor"
                strokeWidth="10"
                fill="transparent"
                className="text-gray-700"
              />
              {isInView && (
                <motion.circle
                  cx="145"
                  cy="145"
                  r="120"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference}
                  animate={{
                    strokeDashoffset: [
                      circumference,
                      circumference -
                        (cssFrameworkCurrentSkill / 100) * circumference,
                    ],
                  }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  strokeLinecap="round"
                  className="text-[#0c9c8a]"
                />
              )}
            </svg>
            <span className="absolute text-5xl">{`${cssFrameworkCurrentSkill}%`}</span>
          </div>
        </div>
      </div>
      <source />
    </div>
  );
};

export default Skills;
