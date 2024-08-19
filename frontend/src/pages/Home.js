import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <button>
        <Link to={"/signup"}>Sign up</Link>
      </button>
    </div>
  );
};

export default Home;
