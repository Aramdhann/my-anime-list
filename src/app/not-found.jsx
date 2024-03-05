import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-2 justify-center items-center relative">
        <Image src="/images/not_found.jpg" width={300} height={300} alt="anya can't find it" />
        <p className="absolute bg-white text-zinc-800 p-2 font-bold top-0 mt-4">
          Sorry! Anya can't find it 🥺
        </p>
      </div>
      <Link
        className="inline-block gap-2 p-2 mt-3 text-sm sm:text-base bg-blue-500 hover:opacity-75 duration-300"
        href="/"
    >
        <FaArrowLeft className="inline-block" /> Home
      </Link>
    </div>
  );
};

export default NotFound;
