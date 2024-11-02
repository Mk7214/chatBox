import { FcSearch } from "react-icons/fc";
const SearchInput = () => {
  return (
    <div className="py-2">
      <form className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered rounded-2xl"
        />
        <button type="submit" className="btn btn-circle">
          <FcSearch className=" w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
