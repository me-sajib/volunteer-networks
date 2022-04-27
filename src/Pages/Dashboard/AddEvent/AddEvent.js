import React from "react";

const AddEvent = () => {
  const addEvent = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const city = e.target.city.value;
    const address = e.target.address.value;
    const img = e.target.photo.value;
    const date = e.target.date.value;
    const phone = e.target.phone.value;
    const website = e.target.website.value;
    const email = e.target.email.value;

    const event = {
      name,
      description,
      city,
      address,
      img,
      date,
      phone,
      website,
      email,
    };
    fetch("http://localhost:5000/addEvent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Event added successfully");
          e.target.reset();
        }
      });
  };
  return (
    <div className="container">
      <h1 className="text-center py-3">ADD EVENT</h1>
      <form className="w-75 mx-auto py-4" onSubmit={addEvent}>
        <div className="form-group mb-3">
          <label htmlFor="name">Event Title</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Enter Event Name"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            className="form-control"
            id="description"
            placeholder="Enter Description"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            required
            className="form-control"
            id="date"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="photo">PHOTO URL</label>
          <input
            type="text"
            name="photo"
            className="form-control"
            id="Photo"
            placeholder="Enter Photo URL"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="city">city</label>
          <input
            type="text"
            name="city"
            className="form-control"
            id="city"
            placeholder="Enter city"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="Address">Address</label>
          <input
            type="text"
            name="address"
            className="form-control"
            id="Address"
            placeholder="Enter Address"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="contact">contact number</label>
          <input
            type="number"
            name="phone"
            className="form-control"
            id="contact"
            placeholder="Enter contact"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="web">website</label>
          <input
            type="text"
            name="website"
            className="form-control"
            id="web"
            placeholder="Enter website url"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          submit
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
