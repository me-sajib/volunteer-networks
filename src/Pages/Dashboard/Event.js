import React from "react";
import "./css/event.css";

const Event = ({ donate }) => {
  const { image, volunteerName, date, _id } = donate;

  const removeEvent = (id) => {
    const sure = window.confirm("Are you sure you want to remove this event?");
    if (sure) {
      fetch("http://localhost:5000/donate/" + id, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            window.location.reload();
          }
        });
    }
  };
  return (
    <div className="col shadow rounded eventWidth mx-3">
      <div className="d-flex gap-3">
        <div className="img">
          <img src={image} alt="" />
        </div>
        <div className="details">
          <h2>{volunteerName}</h2>
          <p>{date}</p>
          <div className="cancelBtn ">
            <button
              onClick={() => removeEvent(_id)}
              className="btn btn-outline-dark "
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
