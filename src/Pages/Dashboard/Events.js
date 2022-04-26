import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Events = () => {
  const [user] = useAuthState(auth);
  const [donate, setDonate] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/donate/" + user.email)
      .then((res) => res.json())
      .then((data) => setDonate(data));
  }, []);
  return (
    <div className="container">
      <h1>all events </h1>
      <div className="row">
        {donate.map((donate) => (
          <li>
            {donate.volunteerName}: email: {donate.email}
            <img src={donate.image} className="img-fluid" alt="" />
          </li>
        ))}
      </div>
    </div>
  );
};

export default Events;
