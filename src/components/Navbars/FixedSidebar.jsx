import { useState } from "react";
import { FaReact } from "react-icons/fa";
import { MdClose, MdMenu } from "react-icons/md";

const FixedSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="relative">
      {/* TOGGLE */}
      {/* {showSidebar ? (
        <button
          className="fixed top-0 right-0 p-1 bg-red-300"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          {" "}
          <MdClose size={28} />{" "}
        </button>
      ) : (
        <button
          className="fixed top-0 right-0 p-1 bg-blue-500"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          {" "}
          <MdMenu size={28} />{" "}
        </button>
      )} */}

      <button className="p-2 bg-rose-400 rounded-lg fixed top-0 right-0" onClick={() => setShowSidebar(!showSidebar)}>
        {
            showSidebar ? <MdClose size={30} /> : <MdMenu size={30} />
        }
      </button>
      {/* TOGGLE-end */}
      <aside
        className={`bg-zinc-700 min-h-screen w-48 absolute inset-y-0 left-0 transform transiton duration-200 ease-in-out ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* <h3 className="text-xl font-semibold text-orange-400 py-3 text-center">
          {" "}
          Swastik{" "}
        </h3>
        <nav className="">
          <ul className="flex flex-col items-center group space-y-4">
            <li className="bg-gray-700 "><a href="#" className="roundedd">
                <FaReact size={28} className='text-fuchsia-700 group-hover:text-fuchsia-800' /> 
                </a>
            </li>
            <li className="bg-gray-700 "><a href="#" className="roundedd">
                <FaReact size={28} className='text-fuchsia-700 group-hover:text-fuchsia-800' /> 
                </a>
            </li>
            <li className="bg-gray-700 "><a href="#" className="roundedd">
                <FaReact size={28} className='text-fuchsia-700 group-hover:text-fuchsia-800' /> 
                </a>
            </li>
            <li className="bg-gray-700 "><a href="#" className="roundedd">
                <FaReact size={28} className='text-fuchsia-700 group-hover:text-fuchsia-800' /> 
                </a>
            </li>
          </ul>

          <a
            href="#"
            className="flex items-center gap-2 px-2 py-2 m-1 rounded text-white transition duration-200 hover:bg-gray-700 hover:text-yellow-400"
          >
            <FaReact /> <span className="">Home</span>
          </a>
        </nav> */}
      </aside>

      <div className="bg-orange-100 dark:bg-zinc-900 p-8 rounded-xl">
          <ul className="grid sm:grid-cols-2 md:grid-cols-3">
            <li className="m-2">
                <a href="#" className="text-center text-orange-600 bg-amber-200 hover:bg-amber-300 dark:text-zinc-50 font-semibold block p-2 dark:bg-zinc-400 dark:hover:bg-orange-400 dark:hover:text-zinc-200 rounded-lg hover:scale-105 transition">  Home</a>
            </li>
            <li className="m-2">
                <a href="#" className="text-center text-orange-600 bg-amber-200 hover:bg-amber-300 dark:text-zinc-300 font-semibold block p-2 dark:bg-zinc-500 dark:hover:bg-zinc-800 rounded-lg hover:scale-105 transition">About</a>
            </li>
            <li className="m-2">
                <a href="#" className="text-center text-orange-600 bg-amber-200 hover:bg-amber-300 dark:text-zinc-300 font-semibold block p-2 dark:bg-zinc-600 dark:hover:bg-zinc-800 rounded-lg hover:scale-105 transition">Contact</a>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default FixedSidebar;
