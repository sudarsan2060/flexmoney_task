import React from "react";
import { useLocation } from "react-router-dom";
const User = (props) => {
  const location = useLocation();
  const data = location.state && location.state.props;
  return (
    <div
      className=" container align-content-center justify-content-center shadow-lg p-3 mb-5 bg-white rounded"
      style={{ height: "20rem", marginTop: "15%", width: "18rem" }}
    >
      <h3 className="card-title pt-3">Welcome !!</h3>
      <div
        className="card-body align-content-center"
        style={{ padding: "20px" }}
      >
        <h5 className="card-title p-1"> Name: {data.name}</h5>
        <p className="card-text p-1"> Age: {data.age}</p>
        <p class="btn btn-primary"> Batch: {data.batch}</p>
      </div>
    </div>
  );
};

export default User;
