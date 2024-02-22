"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    const date = new Date().getFullYear();
    setCurrentYear(date);
  }, []);

  return (
    <footer className="flex justify-center mt-3 px-4 py-2 h-50 bg-blue-500 text-white text-center text-xs">
      <div className="container flex items-center justify-between ">
        <div className="flex items-center gap-2 text-2xl w-fit">
          <p className="text-xs">
            Contact me on <span className="animate-ping">👉</span>
          </p>
          <Link
            target="_blank"
            href="https://github.com/Aramdhann"
            className="duration-300 ease-out hover:ease-in hover:opacity-75"
          >
            <FaGithub />
          </Link>
          <Link
            target="_blank"
            href="https://gitlab.com/Aramdhann"
            className="duration-300 ease-out hover:ease-in hover:opacity-75"
          >
            <FaGitlab />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/mochraditya/"
            className="duration-300 ease-out hover:ease-in hover:opacity-75"
          >
            <FaLinkedin />
          </Link>
        </div>
        <p>&copy; {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
