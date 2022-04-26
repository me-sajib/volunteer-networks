import React from "react";
import { Link } from "react-router-dom";

const Volunteer = ({ volunteer }) => {
  const { name, img, title, _id } = volunteer;
  return (
    <div className="col">
      <div className="card rounded-3">
        <img src={img} className="img-fluid w-100 h-75" alt={title} />
        <div className="card-body text-primary">
          <h2 className="card-title" style={{ textTransform: "uppercase" }}>
            {name}
          </h2>
        </div>
        <div className="p-2">
          <Link
            to={`/checkout/${_id}`}
            className="btn w-100 d-block btn-outline-primary"
          >
            DONATION
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
