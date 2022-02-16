import React from "react";

const FullName = (props) => {
  return (
    <div>
      <h1 style={{ color: "blue" }}>
        I'am {props.name} {props.lastName}
      </h1>
    </div>
  );
};

export default FullName;