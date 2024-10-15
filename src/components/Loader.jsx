import React from "react";
import { Placeholder,Loader } from "rsuite";

const LoadersComponent = () => {
  return (
    <div>
      <Placeholder.Paragraph rows={8} />
      <Loader center content="loading" />
    </div>
  );
};

export default LoadersComponent;
