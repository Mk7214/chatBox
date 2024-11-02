import { Link } from "react-router-dom";
import Gender from "../components/Gender";
import { useState } from "react";

import useSignUp from "../hooks/useSignUp";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    name: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const { loading, signUp } = useSignUp();

  const handleCheckboxChange = (selectedGender) => {
    setInputs({ ...inputs, gender: selectedGender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(inputs);
  };
  return (
    <div className="hero flex h-full  bg-base-100   max-w-full rounded-lg justify-center items-center  backdrop-filter bg-clip-padding backdrop-blur-lg bg-opacity-0">
      <div className="hero-content flex-col l">
        <div className="text-center p-1  lg:text-left">
          <h1 className="text-4xl font-bold">SignUp</h1>
        </div>
        <div className="card bg-opacity-60  bg-base-200 backdrop-blur-lg flex  max-w-72 sm:max-w-sm  shadow-2xl">
          <form className="card-body p-2 " onSubmit={handleSubmit}>
            <div className="form-control h-20 ">
              <label className="label">
                <span className="label-text ">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
                value={inputs.name}
                onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              />
            </div>
            <div className="form-control h-20">
              <label className="label">
                <span className="label-text">UserName</span>
              </label>
              <input
                type="text"
                placeholder="UserName"
                className="input input-bordered"
                required
                value={inputs.userName}
                onChange={(e) =>
                  setInputs({ ...inputs, userName: e.target.value })
                }
              />
            </div>
            <div className="form-control h-20 ">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              />
            </div>{" "}
            <div className="form-control h-20 ">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
              />
            </div>
            <Gender
              onCheckboxChange={handleCheckboxChange}
              selectedGender={inputs.gender}
            />
            <div className="form-control ">
              <label className="label">
                <Link to={"/login"} className="label-text-alt  link link-hover">
                  Already have an account? Login
                </Link>
              </label>
            </div>
            <div className="form-control mt-2  ">
              <button className="btn btn-primary btn-sm">Create Account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
