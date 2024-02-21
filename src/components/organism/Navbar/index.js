import NavbarButton from "@/components/atoms/Button/NavbarButton";

const Navbar = () => {
  return (
    <div className="flex justify-center w-full mb-3 bg-blue-500 p-4 sticky top-0 z-10">
      <div className="container flex justify-between">
        <a href="/" className="uppercase font-bold text-white text-xl">
          myanimelist
        </a>
        <div className="flex gap-5">
          <NavbarButton buttonTitle={"📃 Anime List"} />
          <NavbarButton buttonTitle={"⌛ Schedule Release"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
