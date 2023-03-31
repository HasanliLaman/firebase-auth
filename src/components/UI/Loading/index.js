import React from "react";
import StyleLoading from "./style";

const Loading = () => {
  return (
    <StyleLoading>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </StyleLoading>
  );
};

export default Loading;
