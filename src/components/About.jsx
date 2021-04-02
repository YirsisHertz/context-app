import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const About = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="container text-center">
      {user ? (
        <>
          <h1>Your Data</h1>
          <hr />
          <h2>Your Full Name: {`${user.first_name} ${user.last_name}`}</h2>
          <h2>Your Email: {user.email}</h2>
          <img src={user.avatar} alt={user.avatar} />{" "}
        </>
      ) : (
        <>
          <h1>Please Login</h1>
        </>
      )}
    </div>
  );
};

export default About;
