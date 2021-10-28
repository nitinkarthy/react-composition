import React, { useState } from "react";

const firstStyle = {
  backgroundColor: "blue",
  padding: "5px"
};

const secondStyle = {
  backgroundColor: "aquamarine",
  padding: "3px",
  border: "2px solid white"
};

//Composition site
export const RootComponent = () => {
  const [flag, setFlag] = useState(true);
  return (
    <FirstLevelInnerComponent>
      <SecondLevelInnerComponent>
        <TargetLeafComponent flag={flag} setFlag={setFlag} />
      </SecondLevelInnerComponent>
    </FirstLevelInnerComponent>
  );
};

//Opened up for composition
export const FirstLevelInnerComponent = ({ children }) => {
  //extracting props for proxying. NO actual use here
  return <div style={firstStyle}>{children}</div>;
};

//Opened up for composition
export const SecondLevelInnerComponent = ({ children }) => {
  //extracting props for proxying. NO actual use here
  return <div style={secondStyle}>{children}</div>;
};

export const TargetLeafComponent = ({ flag, setFlag }) => {
  return <input type={"button"} value={flag} onClick={() => setFlag(!flag)} />;
};

//Advantages
// - No prop drilling
// - Although l;eaf component is instantiated in root component, the readability is not sacrificed much
//   becasue the entire component hierarchy is visually present in the root
