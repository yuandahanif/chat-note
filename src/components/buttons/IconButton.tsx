import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

const IconButton: React.FC<{
  onClick: () => void;
  isActive: boolean;
  children: ReactNode;
  title?: string;
}> = ({ onClick, isActive, children, title }) => {
  return (
    <button
      onClick={onClick}
      title={title}
      className={twMerge(
        "duration-300 hover:text-[#F4BFBF]",
        isActive ? "text-[#F4BFBF]" : "text-slate-700"
      )}
    >
      {children}
    </button>
  );
};

IconButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default IconButton;
