import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const navigateToViewDetails = () => {
    navigate("/ViewDetails"); 
  };

  const navigateToForm = () => {
    navigate("/Form"); 
  };

  return (
    <div>
      <h1>Employee System</h1>
      <button onClick={navigateToViewDetails}>
        View Employee Details
      </button>
      <button onClick={navigateToForm}>Add Employee Details</button>
    </div>
  );
};

export default Home;
