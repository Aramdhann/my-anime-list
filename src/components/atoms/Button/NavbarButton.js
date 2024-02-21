const NavbarButton = ({ buttonTitle }) => {
  return (
    <button className="font-bold opacity-100 duration-300 ease-out hover:opacity-75 hover:ease-in text-left w-fit text-xs sm:text-base">
      {buttonTitle}
    </button>
  );
};

export default NavbarButton;
