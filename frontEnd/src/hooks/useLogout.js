import { useState } from "react";
import { useAuthContext } from "../context/authContext";
import toast from "react-hot-toast";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuth } = useAuthContext();
  const logout = async () => {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      console.log(localStorage.getItem("User"));
      localStorage.removeItem("User");
      setAuth(null);
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, logout };
};
export default useLogout;
