import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const { setAuth } = useAuthContext();

  const Login = async (userName, password) => {
    const success = await handleInputError({
      userName,
      password,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, password }),
      });

      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("Logged in successfully");
      }

      localStorage.setItem("User", JSON.stringify(data));
      setAuth(data);
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, Login };
};

export default useLogin;

const handleInputError = ({ userName, password }) => {
  if (!userName || !password) {
    toast.error("All fields are required");
    return false;
  }

  return true;
};
