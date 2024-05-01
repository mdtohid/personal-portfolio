import React from "react";
import { Link } from "react-router-dom";
import portfolioImg from "../../img/trs3.jpeg";
import pdf from "../../img/Tohid-new-resume.pdf";
import fbImg from "../../img/facebook (1).png";
import LiImg from "../../img/linkedin (1).png";
import githubImg from "../../img/github.png";
import "animate.css";
import { MotionConfig, motion } from "framer-motion";

const Intro = () => {
  return (
    <div
      id="home"
      className="flex flex-col-reverse md:flex-row justify-center items-center gap-y-20 h-screen"
    >
      <div className="text-start w-full lg:w-6/12 ">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          className="flex items-center"
        >
          <hr className="w-8 border-[#01d293] me-1" />
          <span className="text-[#01d293] text-xl">Hello</span>
        </motion.div>

        <motion.h1
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          className="text-4xl my-2 text-[#fff]"
        >
          I'm Md. Tohidur Rahman
        </motion.h1>

        <motion.h3
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          className="text-2xl"
        >
          Front end Web Developer
        </motion.h3>

        {/* <motion.Link
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
          to="https://www.linkedin.com/in/md-tohidur-rahman-a02087262/"
          target="_blank"
          className="btn btn-sm me-3 btn-success my-5"
        >
          Hire me
        </motion.Link> */}

        {/* <motion.Link
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
          to={pdf}
          target="_blank"
          className="btn btn-sm  btn-outline btn-accent hover:text-[#808dad] my-5"
        >
          Download Resume
        </motion.Link> */}

        <MotionConfig
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0.3],
          }}
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            // transition={{ ease: "easeOut", duration: 2 }}
            className="inline-block"
          >
            <Link
              to="https://www.linkedin.com/in/md-tohidur-rahman-a02087262/"
              target="_blank"
              className="btn btn-sm me-3 btn-success my-5"
            >
              Hire me
            </Link>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            // transition={{ ease: "easeOut", duration: 2 }}
            className="inline-block"
          >
            <Link
              to={pdf}
              target="_blank"
              className="btn btn-sm  btn-outline btn-accent hover:text-[#808dad] my-5"
            >
              Download Resume
            </Link>
          </motion.div>
        </MotionConfig>

        <div className="flex gap-x-5 my-5">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2, times: [0.3] }}
            className="flex flex-col w-14 items-center"
          >
            <Link
              target="_blank"
              to="https://www.facebook.com/md.tohidur.rahman.714"
            >
              <img src={fbImg} alt="" sizes="" srcset="" />
            </Link>
            <p className="text-sm">facebook</p>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2, times: [0.4] }}
            className="flex flex-col w-14 items-center"
          >
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/md-tohidur-rahman-a02087262/"
            >
              <img src={LiImg} alt="" sizes="" srcset="" />
            </Link>
            <p className="text-sm">Linkedin</p>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2, times: [0.6] }}
            className="flex flex-col w-14 items-center"
          >
            <Link target="_blank" to="https://github.com/mdtohid">
              <img src={githubImg} alt="" sizes="" srcset="" />
            </Link>
            <p className="text-sm">Github</p>
          </motion.div>
        </div>
      </div>
      <div className="avatar w-full lg:w-6/12 justify-center">
        <div className="w-52 lg:w-9/12 rounded-full">
          <img src={portfolioImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
