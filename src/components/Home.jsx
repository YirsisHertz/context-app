import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { userData } from "../helpers/User";

const Home = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogin = () => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="container">
      {user ? (
        <div className="mt-5">
          <h1>
            Hello {user.first_name} {user.last_name}
          </h1>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <button className="btn btn-primary mt-5" onClick={handleLogin}>
          {" "}
          Login{" "}
        </button>
      )}
    </div>
  );
};

export default Home;
