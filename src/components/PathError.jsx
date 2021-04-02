import React from "react";
import { Link } from "react-router-dom";

const PathError = () => {
  return (
    <div className="container text-center mt-5">
      <img
        src="https://cdn2.iconfinder.com/data/icons/it-technology/70/Browserwebsite404-256.png"
        alt="404.png"
      />
      <h1 className="text-danger fs-1 fw-bolder mt-3">404 Not Found</h1>
      <Link className="btn btn-outline-danger mt-3" to="/">
        Go to Home
      </Link>
    </div>
  );
};

export default PathError;
