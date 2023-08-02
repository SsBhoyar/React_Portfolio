import { SiTailwindcss, SiReact } from "react-icons/si";
// import { DiNodejs } from "react-icons/di";
import NODEJS from "../../assets/nodejs.png";
import EXPRESS from "../../assets/ExpressJS.png";
import MONGO from "../../assets/MongoDB.png";

const Tech = () => {
  return (
    <section className="bg-slate-300 p-4 min-w-full flex justify-around items-center flex-wrap">
      <SiTailwindcss
        className="text-sky-400 p-2 rounded-lg bg-slate-200 w-20 h-20"
      />
      <SiReact
        className="text-blue-400 p-2 rounded-lg bg-slate-200 w-20 h-20"
      />
      <div className="rounded-lg overflow-hidden w-20">
        <img src={MONGO} className="" />
      </div>

      <img src={NODEJS} className="w-32 py-0 px-2 bg-slate-200 rounded-lg" />
      <img src={EXPRESS} className="w-40 p-2 bg-slate-100 rounded-lg" />
    </section>
  );
};

export default Tech;
