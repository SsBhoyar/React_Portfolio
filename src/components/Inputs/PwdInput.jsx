import React, { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const PwdInput = () => {
  const [showPwd, setShowPwd] = useState(false);
  const [inputType, setInputType] = useState("password");

  return (
    <div className="relative">
      <input 
        type={inputType}
        name=""
        id=""
        placeholder="Password"
        className="py-2 px-3 w-full rounded-md bg-transparent border-2 border-gray-400 text-sm placeholder:font-semibold dark:placeholder:text-orange-600 caret-orange-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-1 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 dark:border-amber-700 dark:text-gray-50 dark:focus:ring-amber-500 dark:focus:ring-offset-gray-900"
      />
      <span className="absolute bottom-1 right-3 bg-rose-100 dark:bg-zinc-900 rounded-md text-amber-500 hover:bg-red-400/20">
        {showPwd === false ? (
          <MdVisibility
            size={26}
            onClick={() => (setShowPwd(!showPwd), setInputType("text"))}
          />
        ) : (
          <MdVisibilityOff
            size={26}
            onClick={() => (setShowPwd(!showPwd), setInputType("password"))}
          />
        )}
      </span>
    </div>
  );
};

export default PwdInput;
