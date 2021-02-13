import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";

const Homepage: React.FC = () => {
  return (
    <Wrapper colorClass="purple">
      <div className="hero">
        <h1>Hello World!</h1>
        <Link to="/users">See all users...</Link>
      </div>
    </Wrapper>
  );
};

export default Homepage;
