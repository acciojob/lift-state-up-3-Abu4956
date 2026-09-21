import React from "react";

const ChildComponent1 = ({ setSelectedOption }) => {
  return (
    <button onClick={() => setSelectedOption("Option 1")}>
      Option 1
    </button>
  );
};

export default ChildComponent1;
