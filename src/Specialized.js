import React, { useState } from "react";

export const RootComponent = () => {
  const [flag, setFlag] = useState(true);
  return <FirstLevelInnerComponent flag={flag} setFlag={setFlag} />;
};

export const FirstLevelInnerComponent = ({ flag, setFlag }) => {
  //extracting props for proxying. NO actual use here
  return (
    <div style={{ backgroundColor: "red" }}>
      <SecondLevelInnerComponent flag={flag} setFlag={setFlag} />
    </div>
  );
};

export const SecondLevelInnerComponent = ({ flag, setFlag }) => {
  //extracting props for proxying. NO actual use here
  return (
    <div style={{ margin: "5px", border: "2px solid yellow" }}>
      <TargetLeafComponent flag={flag} setFlag={setFlag} />
    </div>
  );
};

export const TargetLeafComponent = ({ flag, setFlag }) => {
  return <input type={"button"} value={flag} onClick={() => setFlag(!flag)} />;
};
