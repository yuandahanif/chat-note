import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";
import { ReactNode } from "react";
interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  title: string;
  icon: ReactNode;
}

const ButtonWithIcon: React.FC<Props> = ({
  isActive,
  children,
  title,
  icon,
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      type="button"
      className={twMerge(
        "flex items-center rounded-md bg-red-300 p-3 dark:text-inherit text-white duration-300 hover:bg-red-400",
        className
      )}
    >
      {icon}
      <span className="inline-flex border-l border-white pl-2">{title}</span>
    </button>
  );
};

ButtonWithIcon.propTypes = {
  isActive: PropTypes.bool,
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default ButtonWithIcon;
