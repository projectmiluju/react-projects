import React, { useEffect } from "react";

const ToggleComponent = () => {
  useEffect(() => {
    console.log("컴포넌트가 마운트");

    return () => {
      console.log("컴포넌트가 언마운트");
    };
  }, []);

  return <h2>컴포넌트</h2>;
};

export default ToggleComponent;
