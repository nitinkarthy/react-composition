import React, { useState } from "react";

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
  return <div style={{ backgroundColor: "blue" }}>{children}</div>;
};

//Opened up for composition
export const SecondLevelInnerComponent = ({ children }) => {
  //extracting props for proxying. NO actual use here
  return (
    <div style={{ margin: "5px", border: "2px solid green" }}>{children}</div>
  );
};

export const TargetLeafComponent = ({ flag, setFlag }) => {
  return <input type={"button"} value={flag} onClick={() => setFlag(!flag)} />;
};

//Advantages
// - No prop drilling
// - Although l;eaf component is instantiated in root component, the readability is not sacrificed much
//   becasue the entire component hierarchy is visually present in the root
