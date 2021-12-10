import React, { useContext } from "react";
import "./heading.css";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <header className="">
      <Link to="/">
        <h2>TaskApp</h2>
      </Link>
      <nav>
        <Link to="/add">
          <button className="btn-green">
            <IoMdAdd />
            Add Employee
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Heading;
