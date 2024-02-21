import Image from "next/image";

const Card = () => {
  return (
    <div className="flex flex-col gap-2 p-2 border border-zinc-600 rounded-lg duration-100 ease-out hover:border-blue-500 hover:ease-in">
      <Image
        src="https://placehold.co/200x250/png"
        width={200}
        height={250}
        className="rounded-lg"
      />
      <p className="font-bold">title</p>
    </div>
  );
};

export default Card;
