import React, { useContext } from "react";
import AuthContext from "./AuthContext";

const Login = () => {
  const { isLoggedIn, toggleLogin } = useContext(AuthContext);

  return (
    <button onClick={toggleLogin} style={styles.button}>
      {isLoggedIn ? "LogOut" : "Login"}
    </button>
  );
};

const styles = {
  button: {
    padding: "10px 15px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
};

export default Login;
