import React from "react";

const ChildComponent2 = ({ setSelectedOption }) => {
  return (
    <button onClick={() => setSelectedOption("Option 2")}>
      Option 2
    </button>
  );
};

export default ChildComponent2;
