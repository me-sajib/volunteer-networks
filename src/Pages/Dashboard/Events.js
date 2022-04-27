import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Event from "./Event";

const Events = () => {
  const [user] = useAuthState(auth);
  const [donate, setDonate] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/donate/" + user.email)
      .then((res) => res.json())
      .then((data) => setDonate(data));
  }, []);
  return (
    <div className="container py-4">
      <h1 className="text-center">ALL EVENTS </h1>
      <div className="row row-cols-1 row-cols-md-2 g-3 mt-5">
        {donate.map((donate) => (
          <Event key={donate._id} donate={donate} />
        ))}
      </div>
    </div>
  );
};

export default Events;
