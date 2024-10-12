import React, { useState } from "react";
import ToggleComponent from "./ToggleComponent";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={() => setShow((prev) => !prev)} style={styles.button}>
        {show ? "컴포넌트 숨기기" : "컴포넌트 보이기"}
      </button>
      {show && <ToggleComponent />}
    </div>
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

export default App;
