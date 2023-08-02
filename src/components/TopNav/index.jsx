import { useState } from "react";
import useDarkMode from "../../hooks/useDarkMode";
import LOGO from "../../assets/swastik.png";
import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import {
  BsMoonStarsFill,
  BsFillChatLeftTextFill,
  BsFillPersonPlusFill,
} from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { MdClose, MdHome, MdPermContactCalendar } from "react-icons/md";

const TopNav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav
        id="nav"
        className="top-nav sticky top-0 inset-x-0 z-50 flex flex-row items-center justify-between px-4 py-1 sm:px-12 md:px-14 bg-gray-200/80 dark:bg-gray-800/80 w-full h-16 shadow-lg"
      >
        {/* LOGO */}
        <Logo />

        {/* LINKS */}
        <div className="hidden sm:flex items-center justify-between md:gap-10 rounded-md  ">
          <a
            href="#"
            className="transition px-4 py-2 inline-block text-lg text-amber-500 font-semibold hover:bg-slate-500/20 rounded-md "
          >
            Home
          </a>
          <a
            href="#about"
            className="transition px-4 py-2 inline-block text-lg text-amber-500 font-semibold hover:bg-slate-500/20 rounded-md "
          >
            About Us
          </a>
          <a
            href="#contact"
            className="transition px-4 py-2 inline-block text-lg text-amber-500 font-semibold hover:bg-slate-500/20 rounded-md "
          >
            Contact
          </a>
        </div>
        {/* LINKS-end */}

        {/* BUTTONS */}
        <div className="flex items-center justify-evenly">
          <ThemeButton />
          <ContactMe />
          {/* TOGGLE */}
          <button
            onClick={() => setToggle(!toggle)}
            className="sm:hidden transition p-1 rounded-md text-amber-500/70 hover:text-amber-500"
          >
            {toggle ? <MdClose size={36} /> : <BiMenuAltRight size={36} />}
          </button>
          {/* TOGGLE-end */}
        </div>
        {/* BUTTONS-end */}

        {/* SIDEBAR */}
        <div
          className={`px-4 sm:px-12 md:px-16 absolute top-full -z-10 inset-x-0 sm:hidden bg-purple-400 transition ease-in-out duration-200  
    ${toggle ? `` : `-translate-y-full opacity-0`}`}
        >
          <div className="py-2 ">
            <a
              href="#"
              className="flex transition font-semibold justify-center gap-1 items-center py-2 text-amber-500 bg-purple-200 hover:bg-purple-200/70 my-1 rounded"
            >
              <MdHome size={22} />
              Home
            </a>
            <a
              href="#"
              className="flex transition font-semibold justify-center gap-1 items-center py-2 text-amber-500 bg-purple-200 hover:bg-purple-200/70 my-1 rounded"
            >
              <MdPermContactCalendar size={20} />
              About
            </a>
            <a
              href="#"
              className="flex transition font-semibold justify-center gap-1 items-center py-2 text-orange-500 bg-purple-200 hover:bg-purple-200/70 my-1 rounded"
            >
              <BsFillPersonPlusFill size={20} />
              Contact
            </a>
          </div>
        </div>
        {/* SIDEBAR-end */}
      </nav>
    </>
  );
};

const Logo = () => (
  <a
    className="text-3xl p-3 font-bold rounded-xl leading-none flex items-center space-x-2 hover:bg-amber-400/30 transition ease-in"
    href="#"
  >
    <img src={LOGO} className="w-8 md:w-10" />
    <span
      className="title-text text-xl text-orange-500 font-semibold
      mr-auto my-auto 
      transition duration-300 ease-in-out"
    >
      Swastik
    </span>
  </a>
);

const ThemeButton = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);

  return (
    <>
      <button onClick={handleMode}>
        {darkTheme ? (
          <FaSun
            size="24"
            className="top-nav-icon text-amber-400 ml-4 mr-3 transition  ease-in-out hover:text-amber-300"
          />
        ) : (
          <BsMoonStarsFill
            size="24"
            className="top-nav-icon text-gray-400 ml-4 mr-3 transition ease-in-out hover:text-amber-400"
          />
        )}
      </button>
    </>
  );
};

const ContactMe = () => (
  <a href="#contact" rel="noopener noreferrer">
    <BsFillChatLeftTextFill
      size="24"
      className="top-nav-icon text-fuchsia-500 ml-4 mr-3 transition duration-300 ease-in-out hover:text-amber-400"
    />
  </a>
);

const Search = () => (
  <div
    className="search w-1/5 flex items-center justify-start 
  bg-gray-400 dark:bg-gray-600
  text-gray-200
  px-2 h-9 ml-0 mr-0 
  rounded-md shadow-md
  transition duration-300 ease-in-out"
  >
    <input
      type="text"
      placeholder="Search..."
      className="search-input w-full font-sans font-semibold
    bg-transparent outline-none 
    text-gray-500  placeholder-gray-600
    pl-1 rounded"
    />
    <FaSearch size="18" className="text-secondary my-auto" />
  </div>
);

// const Title = () => (
//   <h5
//     className="title-text text-xl text-orange-500 font-semibold
// mr-auto ml-2 my-auto
// transition duration-300 ease-in-out"
//   >
//     Swastik
//   </h5>
// );

// const BellIcon = () => (
//   <FaRegBell
//     size="24"
//     className="top-nav-icon text-gray-600 ml-4 mr-3 transition duration-300 ease-in-out hover:text-amber-500"
//   />
// );
export default TopNav;
