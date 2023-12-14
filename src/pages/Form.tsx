import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";



interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  yearJoined: string;
  NIC: string;
  departmentId: string;
}

const Form: React.FC = () => {
  const [employee, setEmployee] = useState<Employee>({
    id: "",
    firstName: "",
    lastName: "",
    yearJoined: "",
    NIC: "",
    departmentId: ""
  });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(employee);
    try {
      const response = await axios.post<Employee>(
        "http://localhost:8081/api/employees/add",
        employee
      );
      console.log("Employee added:", response.data);
      window.location.href = '/';
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
  };

  return (
    <form onSubmit={onSubmit}>
      <h1 className="formheader"> Employee Form</h1>
      <label>
        Id:
        <input
          type="text"
          name="id"
          value={employee.id}
          onChange={handleChange}
        />
        <br />
        <br />
      </label>
      <label>
        First Name:{' '}
        <input
          type="text"
          name="firstName"
          value={employee.firstName}
          onChange={handleChange}
        />
        <br />
        <br />
      </label>
      <label>
        Last Name:{' '}
        <input
          type="text"
          name="lastName"
          value={employee.lastName}
          onChange={handleChange}
        />
        <br />
        <br />
      </label>
      <label>
        Joined Year:
        <input
          type="text"
          name="yearJoined"
          value={employee.yearJoined}
          onChange={handleChange}
        />
        <br />
        <br />
      </label>
      <label>
        NIC number:
        <input
          type="text"
          name="NIC"
          value={employee.NIC}
          onChange={handleChange}
        />
        <br />
        <br />
      </label>
      <label>
        Department Id:
        <input
          type="text"
          name="departmentId"
          value={employee.departmentId}
          onChange={handleChange}
        />
        <br />
        <br />
      </label>
      <center>
        <button type="submit">Submit</button>
      </center>
    </form>
  );
};

export default Form;
