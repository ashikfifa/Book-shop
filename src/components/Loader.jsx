import React from "react";
import { Placeholder,Loader } from "rsuite";

const LoadersComponent = () => {
  return (
    <div>
      <Placeholder.Paragraph rows={18} />
      <Loader size="md" center content="loading" />
    </div>
  );
};

export default LoadersComponent;
