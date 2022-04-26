import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (user) {
    console.log(user);
  }
  return (
    <div className="container">
      <div className="mt-5">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-outline-primary shadow rounded d-block w-100 "
        >
          Google
        </button>
      </div>
    </div>
  );
};

export default Social;
