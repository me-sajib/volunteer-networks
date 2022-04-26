import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Checkout = () => {
  const { donationId } = useParams();
  const [donation, setDonation] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/volunteer/" + donationId)
      .then((res) => res.json())
      .then((data) => setDonation(data[0]));
  }, [donationId]);
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
            <button className="btn btn-primary">DONATE NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
