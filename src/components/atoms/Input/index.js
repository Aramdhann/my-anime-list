const Input = ({ placeholder, onFocus, onBlur }) => {
  return (
    <input
      className="flex rounded-lg text-zinc-800 px-3 py-1 w-[150px] sm:w-fit justify-center focus:w-full"
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
    ></input>
  );
};

export default Input;
