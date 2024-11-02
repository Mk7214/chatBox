import Conversations from "./Conversations.jsx";
import LogOut from "./LogOut.jsx";
import SearchInput from "./SearchInput.jsx";

const SideBar = () => {
  return (
    <div className="py-4 px-2 border-r border-slate-500 bg-neutral bg-opacity-30 rounded-xl flex flex-col mr-2">
      <SearchInput />
      <Conversations />
      <LogOut />
    </div>
  );
};

export default SideBar;
