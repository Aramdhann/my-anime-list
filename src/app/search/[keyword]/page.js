import AnimeList from "@/components/templates/AnimeList";
import Header from "@/components/templates/AnimeList/Header";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const Page = async ({ params }) => {
  const { keyword } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );
  const searchAnime = await response.json();

  const totalAnime = searchAnime.data ? searchAnime.data.length : 0;

  return (
    <>
      <section className="flex flex-col items-center">
        <Header title={`Looking for "${keyword}..."`} />
        <div className="flex items-center gap-3 mb-3">
          {totalAnime !== 0 && (
            <div className="flex justify-center items-center">
              <div className="rounded-full bg-green-500 w-3 h-3 animate-ping relative"></div>
              <div className="absolute rounded-full bg-green-500 w-2 h-2"></div>
            </div>
          )}
          {totalAnime === 0 && (
            <div className="flex justify-center items-center">
              <div className="rounded-full bg-red-500 w-3 h-3 animate-ping relative"></div>
              <div className="absolute rounded-full bg-red-500 w-2 h-2"></div>
            </div>
          )}
          <p className="text-xs">
            Total{" "}
            <span className="font-bold text-orange-300">{totalAnime}</span>{" "}
            similar anime have been found
          </p>
        </div>
        <AnimeList api={searchAnime} />
        {totalAnime === 0 && (
          <>
            <div className="flex flex-col gap-2 justify-center items-center relative">
              <Image src="/images/not_found.jpg" width={300} height={300} />
              <p className="absolute bg-white text-zinc-800 p-2 font-bold top-0 mt-4">
                Sorry! Anya can't find it 🥺
              </p>
            </div>
            <Link className="flex items-center gap-2 p-2 mt-3 text-sm sm:text-base bg-blue-500 hover:opacity-75 duration-300" href='/'><FaArrowLeft/> Home</Link>
          </>
        )}
      </section>
    </>
  );
};

export default Page;
