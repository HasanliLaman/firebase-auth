import React, { useContext } from "react";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";

import StyleHomepage from "./style";

const Homepage = () => {
  const { logOutUser } = useContext(AuthContext);

  return (
    <StyleHomepage>
      <div>
        Welcome!
        <button onClick={logOutUser}>Log Out</button>
      </div>
    </StyleHomepage>
  );
};

export default Homepage;
