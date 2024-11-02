import { BiLogOut } from "react-icons/bi";
import useLogout from "../hooks/useLogout";
const LogOut = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto ">
      {loading ? (
        <span className=" loading loading-spinner"></span>
      ) : (
        <BiLogOut
          className="w-6 h-6 cursor-pointer text-white  "
          onClick={logout}
        />
      )}
    </div>
  );
};

export default LogOut;
