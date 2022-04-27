import React, { useEffect, useState } from "react";
import Spinner from "../../Shared/Spinner/Spinner";

const Dashboard = () => {
  const [donar, setDonar] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/donate")
      .then((res) => res.json())
      .then((data) => setDonar(data));
    setLoading(false);
  }, []);
  let total = 0;
  //   remove donar
  const removeDonar = (id) => {
    const sure = window.confirm("Are you sure you want to remove this event?");
    if (sure) {
      fetch("http://localhost:5000/donar/" + id, {
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
    <div className="container">
      <h1>Dashboard</h1>
      <table className="table table-striped table-primary">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">NAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">VOLUNTEER</th>
            <th scope="col">DATE</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {donar.map((donar) => {
            return (
              <tr key={donar._id}>
                <th scope="row">{++total}</th>
                <td>{donar.name}</td>
                <td>{donar.email}</td>
                <td>{donar.volunteerName}</td>
                <td>{donar.date}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeDonar(donar._id)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {loading && <Spinner />}
    </div>
  );
};

export default Dashboard;
