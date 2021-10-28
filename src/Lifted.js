import React, { useState } from "react";

const firstStyle = {
  backgroundColor: "brown",
  padding: "5px"
};

const secondStyle = {
  backgroundColor: "chartreuse",
  padding: "3px",
  border: "2px solid white"
};

export const RootComponent = () => {
  const [flag, setFlag] = useState(true);
  const liftedTarget = <TargetLeafComponent flag={flag} setFlag={setFlag} />;
  return <FirstLevelInnerComponent liftedComponent={liftedTarget} />;
};

export const FirstLevelInnerComponent = ({ liftedComponent }) => {
  //extracting props for proxying. NO actual use here
  return (
    <div style={firstStyle}>
      <SecondLevelInnerComponent liftedComponent={liftedComponent} />
    </div>
  );
};

export const SecondLevelInnerComponent = ({ liftedComponent }) => {
  //extracting props for proxying. NO actual use here
  return <div style={secondStyle}>{liftedComponent}</div>;
};

export const TargetLeafComponent = ({ flag, setFlag }) => {
  return <input type={"button"} value={flag} onClick={() => setFlag(!flag)} />;
};

// Advantages
// - Number of props to be drilled is reduced.
// IRL the target leaf component might need 10 props, but since we lifted it,
// only one prop (instantiated leaf component) need to be pased down

//Disadvantages
// - Prop drilling still exists even though minimal
// - The readability of the RootComponent is reduced since we are instantiating a
//    leaf component that is used many levels deep down
