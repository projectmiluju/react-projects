import React from "react";
import Button from "./Button";

const App = () => {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <Button label="클릭" onClick={() => alert("버튼 클릭")} />

      <Button label="좋아요" onClick={() => alert("좋아요 클릭")} />

      <Button
        label="삭제"
        onClick={() => alert("삭제 클릭")}
        style={{ backgroundColor: "red" }}
      ></Button>
    </div>
  );
};

export default App;
