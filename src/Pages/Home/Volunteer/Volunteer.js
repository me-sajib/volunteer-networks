import React from "react";

const Volunteer = ({ volunteer }) => {
  const { name, description, img, title, id } = volunteer;
  return (
    <div className="col">
      <div className="card rounded-3 bg-warning">
        <img src={img} className="img-fluid w-100 h-75" alt={title} />
        <div className="card-body text-white">
          <h2 className="card-title" style={{ textTransform: "uppercase" }}>
            {name}
          </h2>
        </div>
        <div className="p-2">
          <button className="btn w-100 d-block btn-outline-primary">
            DONATION
          </button>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
