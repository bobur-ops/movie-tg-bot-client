import "./SearchBar.css";
import { BsSearch } from "react-icons/bs";

const Input = () => {
  return (
    <div className="searchbar rounded-[10px] flex gap-3 w-full py-3 px-2">
      <BsSearch fontSize={"24px"} />
      <input
        placeholder="Right now we have little amount of available movies, so there is no need in search"
        disabled
        className="bg-transparent outline-none border-none w-full"
      />
    </div>
  );
};

export default Input;
