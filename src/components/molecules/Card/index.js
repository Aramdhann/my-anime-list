import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const Card = ({ title, images, score, alt, id }) => {
  return (
    <div className="flex h-full">
      <Link
        href={`/${id}`}
        className="flex w-fit max-w-[200px] flex-col gap-2 p-2 border border-zinc-600 rounded-lg duration-100 ease-out hover:border-blue-500 hover:ease-in cursor-pointer"
      >
        <div className="relative">
          <div className="absolute bottom-0 h-[20%] bg-gradient-to-t from-black to-transparent opacity-45 rounded-b-lg w-full"></div>
          <div className="absolute p-2 flex justify-between w-full gap-1 items-center bottom-0">
            <p className="text-xs text-white">On-going</p>
            <div className="flex gap-1 items-center px-1 py-1 bg-orange-400 rounded-md">
              <FaStar color="yellow" size={12} />
              <p className="text-xs leading-none text-white">{score}</p>
            </div>
          </div>
          <Image
            src={images}
            alt={alt}
            width={200}
            height={250}
            className="rounded-lg max-h-[250px] object-cover"
          />
        </div>
        <p className="font-bold text-xs md:text-sm lg:text-base">{title}</p>
      </Link>
    </div>
  );
};

export default Card;
