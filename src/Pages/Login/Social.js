import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Spinner from "../Shared/Spinner/Spinner";

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
        {loading && <Spinner />}
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-outline-primary shadow rounded d-block w-100 "
        >
          Google
        </button>
        {error && <div className="alert alert-danger">{error.message}</div>}
      </div>
    </div>
  );
};

export default Social;
