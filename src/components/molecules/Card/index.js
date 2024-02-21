import { FaStar } from "react-icons/fa6";
import Image from "next/image";

const Card = ({title, images, score, alt}) => {
  return (
    <div className="flex flex-col gap-2 p-2 border border-zinc-600 rounded-lg duration-100 ease-out hover:border-blue-500 hover:ease-in hover:scale-105">
      <div className="relative">
        <div className="absolute bottom-0 h-[20%] bg-gradient-to-t from-black to-transparent opacity-45 rounded-b-lg w-full"></div>
        <div className="absolute p-2 flex justify-between w-full gap-1 items-center bottom-0">
          <p className="text-xs text-white">On-going</p>
          <div className="flex gap-1 items-center px-2 py-1 bg-orange-400 rounded-lg">
            <FaStar color="yellow" size={16} />
            <p className="text-sm leading-none">{score}</p>
          </div>
        </div>
        <Image
          src={images}
          alt={alt}
          width={200}
          height={250}
          className="rounded-lg"
        />
      </div>
      <p className="font-bold">{title}</p>
    </div>
  );
};

export default Card;
