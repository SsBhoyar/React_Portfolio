import { SiTailwindcss, SiReact } from "react-icons/si";
import {BsStack} from 'react-icons/bs';
// import { DiNodejs } from "react-icons/di";
import NODEJS from "../../assets/nodejs.png";
import EXPRESS from "../../assets/ExpressJS.png";
import MONGO from "../../assets/MongoDB.png";

const Tech = () => {
  return (
    <>
    <h2 className="py-8 bg-slate-200 relative dark:bg-slate-900 text-4xl font-semibold text-fuchsia-700 flex items-end justify-center gap-2 after:absolute after:bottom-5 after:content-'-' after:w-72 after:h-[0.17rem] after:bg-fuchsia-700/60">
        <BsStack />
        Technology I use
      </h2>
    <section className="bg-slate-300 p-4 gap-4 min-w-full grid grid-flow-col overflow-x-auto snap-x snap-mandatory scroll-p-4">
      <a href="https://tailwindcss.com/" target="_blank" className="w-20">
        <SiTailwindcss className="text-sky-400 p-2 rounded-lg bg-slate-100 w-20 h-20" />
      </a>
      <a href="https://react.dev/" target="_blank" className="w-20">
        <SiReact className="text-blue-400 p-2 rounded-lg bg-slate-100 w-20 h-20" />
      </a>
      <a href="https://nextjs.org/" target="_blank" className="w-20">
        <Next className="" />
      </a>
      <a href="https://www.mongodb.com/" target="_blank" className="w-20">
        <img src={MONGO} className="rounded-lg" />
      </a>
      <a
        href="https://nodejs.org/"
        target="_blank"
        className="w-32"
        rel="noopener noreferrer"
      >
        <img src={NODEJS} className="w-32 py-0 px-2 bg-slate-100 rounded-lg" />
      </a>
      <a href="http://expressjs.com/" target="_blank" className="w-64">
        <img src={EXPRESS} className=" p-2 bg-slate-100 rounded-lg" />
      </a>
    </section>
    </>
  );
};

const Next = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
      <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" />
    </svg>
  );
};

export default Tech;
