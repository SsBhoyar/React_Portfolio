import { useEffect, useState } from "react";
import { BiArrowToTop } from "react-icons/bi";

const ScrollToTop = () => {
  const [showBtn, setShowBtn] = useState(false);
 
  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.pageYOffset > 200 ? setShowBtn(true) : setShowBtn(false)
    );

    // return (window.removeEventListener('scroll'))
  }, []);

  return (
    <>
      {/* <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="p-3 fixed bottom-4 right-4 bg-fuchsia-600 bg-opacity-70 border-1 border-gray-300 rounded-full"
      >
        <BiArrowToTop size={28} />
      </button> */}
      {showBtn && (
        <a
          href="#main"
          className="p-2 rounded-full fixed bottom-4 right-4 transition bg-fuchsia-500/60 z-50 hover:bg-slate-200/30 text-slate-100 hover:text-amber-500 hover:outline-fuchsia-600 hover:outline hover:outline-4 "
        >
          <BiArrowToTop size={32} className='' />
        </a>
      )}
    </>
  );
};

export default ScrollToTop;
