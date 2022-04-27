import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Spinner from "../Shared/Spinner/Spinner";
import "./css/Social.css";

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="container">
      <div className="mt-5">
        <div className="d-flex mb-3">
          <div class="bg-primary w-100 mt-2" style={{ height: "2px" }}></div>
          <div className="mx-2">OR</div>
          <div
            className="bg-primary w-100 mt-2"
            style={{ height: "2px" }}
          ></div>
        </div>
        {loading && <Spinner />}
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-outline-primary shadow rounded mx-3 w-25 "
        >
          <i class="fa-brands fa-google"></i>
        </button>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-outline-primary shadow rounded  w-25 "
        >
          <i class="fa-brands fa-github"></i>
        </button>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-outline-primary shadow rounded ms-3  w-25 "
        >
          <i class="fa-brands fa-facebook"></i>
        </button>
        {error && <div className="alert alert-danger">{error.message}</div>}
      </div>
    </div>
  );
};

export default Social;
