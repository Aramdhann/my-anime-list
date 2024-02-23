import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useRef } from "react";

const Input = ({ placeholder, onFocus, onBlur }) => {
  const searchRef = useRef();
  const { replace } = useRouter();

  const handleInputChange = useDebouncedCallback((e) => {
    const keyword = e.target.value;
    if (keyword.trim() === "") {
      replace("/");
    } else {
      replace(`/search/${keyword}`);
    }
  }, 300);

  return (
    <>
      <input
        className="flex rounded-lg text-zinc-800 ps-3 pe-9 py-1 w-[190px] focus:w-full sm:focus:w-fit sm:w-fit justify-center text-sm duration-50"
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        ref={searchRef}
        onChange={handleInputChange}
      ></input>
    </>
  );
};

export default Input;
