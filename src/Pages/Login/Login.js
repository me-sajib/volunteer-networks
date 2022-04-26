import React from "react";
import Social from "./Social";

const Login = () => {
  return (
    <div className="container">
      <div className="w-50 mx-auto mt-4">
        <h2 className="text-primary text-center">Login now</h2>
        <form>
          <div className="form-group mb-4">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
        <Social />
      </div>
    </div>
  );
};

export default Login;
