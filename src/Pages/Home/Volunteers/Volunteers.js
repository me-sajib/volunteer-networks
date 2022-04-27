import React, { useEffect, useState } from "react";
import Spinner from "../../Shared/Spinner/Spinner";
import Volunteer from "../Volunteer/Volunteer";

const Volunteers = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/volunteers")
      .then((res) => res.json())
      .then((data) => setVolunteers(data));
    setLoading(false);
  }, []);
  return (
    <div className="container">
      <div className="  mt-5 w-75 mx-auto">
        <h2>Search your volunteer</h2>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
        {volunteers.map((volunteer) => (
          <Volunteer key={volunteer._id} volunteer={volunteer} />
        ))}
        {loading && <Spinner />}
      </div>
    </div>
  );
};

export default Volunteers;
