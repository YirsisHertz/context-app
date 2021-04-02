import React, { useState } from "react";
import Header from "./components/Header";

import { UserContext } from "./context/UserContext";
//import { user } from "./helpers/User";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
      </UserContext.Provider>
    </div>
  );
};

export default App;
