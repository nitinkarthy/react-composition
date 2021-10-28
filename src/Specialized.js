import React, { useState } from "react";

const firstStyle = {
  backgroundColor: "red",
  padding: "5px"
};

const secondStyle = {
  backgroundColor: "darkseagreen",
  padding: "3px",
  border: "2px solid white"
};

export const RootComponent = () => {
  const [flag, setFlag] = useState(true);
  return <FirstLevelInnerComponent flag={flag} setFlag={setFlag} />;
};

export const FirstLevelInnerComponent = ({ flag, setFlag }) => {
  return (
    <div style={firstStyle}>
      <SecondLevelInnerComponent flag={flag} setFlag={setFlag} />
    </div>
  );
};

export const SecondLevelInnerComponent = ({ flag, setFlag }) => {
  return (
    <div style={secondStyle}>
      <TargetLeafComponent flag={flag} setFlag={setFlag} />
    </div>
  );
};

export const TargetLeafComponent = ({ flag, setFlag }) => {
  return <input type={"button"} value={flag} onClick={() => setFlag(!flag)} />;
};
