"use client";

import NavbarButton from "@/components/atoms/Button/NavbarButton";
import Input from "@/components/atoms/Input";
import { useState } from "react";

const Navbar = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleFocus = () => {
    setIsInputFocused(true);
  };

  const handleBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <header className="flex justify-center w-full mb-3 bg-blue-500 p-4 sticky top-0 z-10">
      <div className="container flex flex-wrap justify-between">
        <a
          href="/"
          id="nav-title"
          className={`uppercase font-bold text-white text-xl float-left ${
            isInputFocused ? "hidden" : ""
          }`}
        >
          myanimelist
        </a>
        <Input
          placeholder={"🔎 Search anime ..."}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <div className="flex gap-5 mt-4 md:mt-0 w-full md:w-fit justify-center">
          <NavbarButton buttonTitle={"📃 Anime List"} />
          <NavbarButton buttonTitle={"⌛ Schedule Release"} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
