const Login = () => {
  return (
    <div className="hero flex h-full  bg-base-100  mt-11 max-w-full rounded-lg justify-center items-center  backdrop-filter bg-clip-padding backdrop-blur-lg bg-opacity-0">
      <div className="hero-content flex-col l">
        <div className="text-center p-4 lg:text-left">
          <h1 className="text-4xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-opacity-60  bg-base-200 backdrop-blur-lg flex  max-w-72 sm:max-w-sm  shadow-2xl">
          <form className="card-body p-4 ">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt pt-2 link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6 ">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
