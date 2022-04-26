import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Checkout = () => {
  const { donationId } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/volunteer/" + donationId)
      .then((res) => res.json())
      .then((data) => console.log(data[0]));
  }, []);
  return (
    <div>
      <h1>Checkout</h1>
    </div>
  );
};

export default Checkout;
