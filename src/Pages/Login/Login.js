import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Spinner from "../Shared/Spinner/Spinner";
import Social from "./Social";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const loginUser = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await signInWithEmailAndPassword(email, password);
    if (user) {
      window.location = "/";
    }
  };
  return (
    <div className="container">
      <div className="w-50 mx-auto mt-4">
        <h2 className="text-primary text-center">Login now</h2>
        <form onSubmit={loginUser}>
          <div className="form-group mb-4">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="email"
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
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          {error && <div className="alert alert-danger">{error.message}</div>}
          <button type="submit" className="btn btn-primary">
            Login
          </button>

          {loading && <Spinner />}
        </form>
        <Social />
      </div>
    </div>
  );
};

export default Login;
