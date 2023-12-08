import React from "react";
import { useNavigate } from "react-router-dom";
import ViewDetails from "./ViewDetails";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const navigateToViewDetails = () => {
    navigate("/ViewDetails"); // Adjust the path based on your route configuration
  };

  const navigateToForm = () => {
    navigate("/Form"); // Adjust the path based on your route configuration
  };

  return (
    <div>
      <h1>Employee System</h1>
      <button className="1" onClick={navigateToViewDetails}>
        View Employee Details
      </button>
      <button onClick={navigateToForm}>Add Employee Details</button>
    </div>
  );
};

export default Home;
