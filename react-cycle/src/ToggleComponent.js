import React, { useEffect } from "react";

const ToggleComponent = () => {
  useEffect(() => {
    console.log("🟢 컴포넌트가 마운트되었습니다!");

    return () => {
      console.log("🔴 컴포넌트가 언마운트되었습니다!");
    };
  }, []);

  return <h2>✨ 나는 토글 컴포넌트야!</h2>;
};

export default ToggleComponent;
