import React, { useContext } from "react";
import AuthContext from "./AuthContext";

const Nav = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <nav style={styles.nav}>
      <h2>My Project</h2>
      <p>{isLoggedIn ? "🔵 IN" : "🔴 OUT"}</p>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundColor: "#eee",
  },
};

export default Nav;
