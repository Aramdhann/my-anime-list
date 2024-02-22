import Link from "next/link";

const Header = ({ titleList }) => {
  return (
    <div className="flex justify-between items-center mb-3">
      <p className="font-bold text-blue-300">✨{titleList}</p>
      <Link
        href="/popular"
        className="duration-300 ease-out hover:opacity-75 hover:ease-in"
      >
        see all
      </Link>
    </div>
  );
};

export default Header;
