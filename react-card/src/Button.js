import React from "react";

const Button = ({ label, onClick, children, style }) => {
  return (
    <button onClick={onClick} style={{ ...styles.button, ...style }}>
      {children}
      {label}
    </button>
  );
};

const styles = {
  button: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px 15px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
};

export default Button;
