import NavbarButton from "@/components/atoms/Button/NavbarButton";
import Input from "@/components/atoms/Input";

const Navbar = () => {
  return (
    <header className="flex justify-center w-full mb-3 bg-blue-500 p-4 sticky top-0 z-10">
      <div className="container flex flex-wrap justify-between">
        <a href="/" className="uppercase font-bold text-white text-xl">
          myanimelist
        </a>
        <Input />
        <div className="flex gap-5 mt-4 md:mt-0 w-full md:w-fit justify-center">
          <NavbarButton buttonTitle={"📃 Anime List"} />
          <NavbarButton buttonTitle={"⌛ Schedule Release"} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
