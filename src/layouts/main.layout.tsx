import React, { ReactNode } from "react";
import PropTypes from "prop-types";

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="mx-auto flex min-h-screen max-w-screen-2xl bg-main-white shadow-md">
      {children}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
