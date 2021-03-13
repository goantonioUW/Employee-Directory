import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm/index";
import SearchResults from "../components/SearchResults/index";
import API from "../utils/API";
// import "style.css"

const ViewEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      API.getEmployees(25).then(res => {
        setEmployees([...res.data.results]);
        const sorted = [...res.data.results].sort((a, b) =>
          a.name.first > b.name.first ? 1 : -1
        );
        setResults([...sorted]);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleInputChange = e => {
    setResults(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    try {
      let searchRes = employees.filter(employee =>
        `${employee.name.first} ${employee.name.last}`
          .toLowerCase()
          .includes(document.querySelector("#employee").value.toLowerCase())
      );

      setResults([...searchRes]);
    } catch (err) {
      setError(err.message);
      console.log(error);
    }
  };

  const handleFilter = filteredBy => {
    console.log(filteredBy);
    let filtered;
    switch (filteredBy) {
      case "First Name":
        filtered = employees.sort((a, b) => ( a.name.first > b.name.first ? 1 : -1));
        console.log(filtered);
        setResults([...filtered]);
        break;
      case "Last Name":
        filtered = employees.sort((a, b) => (a.name.last > b.name.last ? 1 : -1));
        setResults([...filtered]);
        console.log(filtered);
        break;
        case "Age Ascending":
          filtered = employees.sort((a, b) => (a.dob.age > b.dob.age ? 1 : -1));
          setResults([...filtered]);
          console.log(filtered);
          break;      
        case "Age Descending":
          filtered = employees.sort((a, b) => (a.dob.age < b.dob.age ? 1 : -1));
          setResults([...filtered]);
          console.log(filtered);
          break;
      case "Email":
        filtered = employees.sort((a, b) => (a.email > b.email ? 1 : -1));
        setResults([...filtered]);
        console.log(filtered);
        break;
        case "Location":
          filtered = employees.sort((a, b) => (a.location.city > b.location.city ? 1 : -1));
          setResults([...filtered]);
          console.log(filtered);
          break;
      default:
        filtered = employees.sort((a, b) => (a.name.first > b.name.first ? 1 : -1));
        setResults([...filtered]);
        break;
    }
  };

  return (
    <div>
      <Container style={{ minHeight: "80%" }}>
        <SearchForm
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          handleFilter={handleFilter}
          employees={employees}
        />
        <SearchResults results={results} />
      </Container>
    </div>
  );
};

export default ViewEmployees;