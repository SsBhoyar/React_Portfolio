import LOGO from "../../assets/swastik.png";
import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const DevNav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="fixed z-50 w-full p-3 shadow-xl bg-slate-300/70">
        <div className="flex justify-between items-center px-2 sm:px-6 md:px-10">
          <div className="rounded-lg transition ease-in-out bg-blue-300/40 p-2 hover:bg-blue-400/50">
            <a href="#">
              <img src={LOGO} alt="logo" className="w-8" />
            </a>
          </div>

          <ul className="hidden sm:flex rounded-lg p-2">
            <li>
              <a
                href="#"
                className="transition ease-in font-semibold text-amber-500 p-2 rounded hover:bg-blue-300/50"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition ease-in font-semibold text-amber-500 p-2 rounded hover:bg-blue-300/50"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition ease-in font-semibold text-amber-500 p-2 rounded hover:bg-blue-300/50"
              >
                Services
              </a>
            </li>
          </ul>

          {/* TOGGLE */}
          <button
            onClick={() => (setToggle(!toggle), console.log('Toggle'))}
            className="sm:hidden transition p-1 rounded-md text-amber-500/70 hover:text-amber-500/100"
          >
            {
                toggle ? <MdClose size={36} /> : <BiMenuAltRight size={36} />
            }
            
          </button>
          {/* TOGGLE-end */}
        </div>


      </nav>
        {/* SIDEBAR */}
        <nav className={`fixed z-40 left-0 p-10 sm:hidden bg-slate-300 transition ease-in-out duration-200  
        ${toggle ? `` : `-translate-x-full`}`}>

            <div className="w-20 h-20 bg-red-300"></div>
        </nav>
        {/* SIDEBAR-end */}
    </>
  );
};

export default DevNav;
