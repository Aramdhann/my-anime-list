import Image from "next/image";

const Card = () => {
  return (
    <div className="border w-fit p-2">
      <p>title</p>
      <Image src="https://placehold.co/200x250/png" width={200} height={250} />
    </div>
  );
};

export default Card;
