import React, { useEffect, useState } from "react";
import Volunteer from "../Volunteer/Volunteer";

const Volunteers = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    fetch("json.json")
      .then((res) => res.json())
      .then((data) => setVolunteers(data));
  }, []);
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
        {volunteers.map((volunteer) => (
          <Volunteer key={volunteer.id} volunteer={volunteer} />
        ))}
      </div>
    </div>
  );
};

export default Volunteers;
