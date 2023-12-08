import React, { useState, useEffect } from "react";

interface Employee {
  firstName: string;
  lastName: string;
  nic: string;
  yearJoined: string;
  departmentId: string;
}

const ViewDetails: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const apiGet = () => {
    fetch("http://localhost:8081/api/employees", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json: Employee[]) => {
        setEmployees(json);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    // Call apiGet when the component mounts
    apiGet();
  }, []);

  console.log("Employee Data:", employees);

  return (
    <div><center>
      <h2>Employee Details</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>NIC</th>
            <th>Year Joined</th>
            <th>Department ID</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.nic}</td>
              <td>{employee.yearJoined}</td>
              <td>{employee.departmentId}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </center>
      </div>
  );
};

export default ViewDetails;
