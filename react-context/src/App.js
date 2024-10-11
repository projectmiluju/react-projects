import React from "react";
import { AuthProvider } from "./AuthContext";
import Nav from "./Nav";
import Login from "./Login";

const App = () => {
  return (
    <AuthProvider>
      <Nav />
      <div style={styles.container}>
        <h1>Hi All!</h1>
        <Login />
      </div>
    </AuthProvider>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "20px",
  },
};

export default App;
