const Input = ({ placeholder, onFocus, onBlur }) => {
  return (
    <input
      className="flex rounded-lg text-zinc-800 px-3 py-1 w-[150px] sm:w-fit justify-center focus:w-full focus:ease-in ease-out duration-300 input"
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
    ></input>
  );
};

export default Input;
