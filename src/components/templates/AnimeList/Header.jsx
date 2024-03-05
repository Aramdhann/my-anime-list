import Link from "next/link";

const Header = ({ title, linkTitle, linkHref }) => {
  return (
    <div className="px-3 container flex justify-between items-center mb-3">
      <p className="font-bold text-blue-300">✨{title}</p>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="duration-300 ease-out hover:opacity-75 hover:ease-in"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
