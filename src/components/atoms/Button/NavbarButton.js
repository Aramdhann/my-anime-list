const NavbarButton = (props) => {
  const { buttonTitle } = props;

  return (
    <button className="font-bold opacity-75 duration-500 ease-out hover:opacity-100 hover:ease-in">
      {buttonTitle}
    </button>
  );
};

export default NavbarButton;
