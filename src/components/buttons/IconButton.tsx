import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

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

export default IconButton;
