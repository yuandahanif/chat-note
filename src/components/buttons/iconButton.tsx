import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";
interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  isActive?: boolean;
  title?: string;
}

const IconButton: React.FC<Props> = ({
  onClick,
  isActive,
  children,
  title,
}) => {
  return (
    <button
      onClick={onClick}
      title={title}
      className={twMerge(
        "duration-300 hover:text-[#F4BFBF]",
        isActive ? "text-[#F4BFBF]" : "text-slate-700 dark:text-white"
      )}
    >
      {children}
    </button>
  );
};

IconButton.propTypes = {
  isActive: PropTypes.bool,
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default IconButton;
