import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";

const Checkout = () => {
  const [user] = useAuthState(auth);
  const { donationId } = useParams();
  const [donation, setDonation] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/volunteer/" + donationId)
      .then((res) => res.json())
      .then((data) => setDonation(data[0]));
  }, [donationId]);

  const addVolunteer = (e) => {
    e.preventDefault();
    const volunteerName = donation.name;
    const name = e.target.name.value;
    const email = user.email;
    const date = e.target.date.value;
    const image = donation.img;
    const volunteerId = donation._id;
    const data = { volunteerName, volunteerId, name, email, image, date };
    fetch("http://localhost:5000/volunteer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="container">
      <div className="my-5">
        <h2 className="text-center text-primary pb-5">Donation</h2>
        <div className="row ">
          <div className="col-md-12 col-lg-6">
            <img src={donation.img} className="img-fluid" alt="" />
          </div>
          <div className="col-md-12 col-lg-6">
            <h2 className="text-primary pt-2">{donation.name}</h2>
            <p className="pt-3">{donation.description}</p>
            <p>
              Email: <b>{donation?.email}</b>
            </p>
            <p>
              City: <b> {donation.city}</b>
            </p>
            <p>
              Address: <i>{donation.address}</i>{" "}
            </p>
            <p>
              Contact: <b>{donation.phone}</b>
            </p>
            <p>website: {donation?.website}</p>

            <form onSubmit={addVolunteer}>
              <div className="form-group mb-3">
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  value={user?.displayName}
                  type="text"
                  className="form-control"
                  id="name"
                  readOnly
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email">Email address</label>
                <input
                  name="email"
                  value={user?.email}
                  type="email"
                  className="form-control"
                  id="email"
                  readOnly
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="date">Visit Date</label>
                <input
                  name="date"
                  type="date"
                  required
                  className="form-control"
                  id="date"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                DONATE NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
