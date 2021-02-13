import React, { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
  colorClass: string;
};

const Wrapper: React.FC<WrapperProps> = ({ children, colorClass }) => {
  return (
    <div className={`wrapper ${colorClass}`}>
      <div className="container">{children}</div>
    </div>
  );
};

export default Wrapper;
