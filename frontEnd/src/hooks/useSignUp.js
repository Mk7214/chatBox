import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { setAuth } = useAuthContext();
  const signUp = async ({
    name,
    userName,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = await handleInputError({
      name,
      userName,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: name,
          userName,
          password,
          confirmPassword,
          gender,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("UserInfo", JSON.stringify(data));

      setAuth(data);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { signUp, loading };
};
export default useSignUp;

const handleInputError = ({
  name,
  userName,
  password,
  confirmPassword,
  gender,
}) => {
  if (!name || !userName || !password || !confirmPassword || !gender) {
    toast.error("All fields are required");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Password and Confirm Password do not match");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }
  return true;
};
