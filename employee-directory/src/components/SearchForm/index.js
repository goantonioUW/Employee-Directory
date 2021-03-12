import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SearchForm = (props) => {
  return (
    <form className="search" onChange={props.handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="name">Employee name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="name"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Search employees by name."
          id="employee"
        />
        <label htmlFor="filter">Filter:</label>
        <select
          className="form-control"
          name="filter"
          id="filter"
          onChange={() =>
            props.handleFilter(document.querySelector("#filter").value)
          }
        >
          <option value="First Name">First Name A-Z</option>
          <option value="Last Name">Last Name A-Z</option>
          <option value="Age">Age</option>
          <option value="Email">Email</option>
          <option value="Location">Location city name A-Z</option>
        </select>

        <datalist id="employees">
          {props.employees.map((employee) => (
            <option
              value={`${employee.name.first} ${employee.name.last}`}
              key={employee.login.uuid}
            />
          ))}
        </datalist>
      </div>
    </form>
  );
};

export default SearchForm;
