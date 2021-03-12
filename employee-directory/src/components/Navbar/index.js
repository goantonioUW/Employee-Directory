import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../../pages/Home";
import ViewEmployees from "../../pages/ViewEmployees";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = () => {
  return (
    <Router>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Employee Directory
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
          <Link
              to="/"
              className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
            >
              Home
            </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/ViewEmployees"
                className={
                  window.location.pathname === "/ViewEmployees"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                ViewEmployees
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div>

        
        {/* Switch Pathes */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/ViewEmployees">
            <ViewEmployees />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Navbar;
