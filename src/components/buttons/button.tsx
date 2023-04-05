import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

const Button: React.FC<Props> = ({
  isActive,
  children,
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={twMerge(
        "flex items-center rounded-md bg-red-300 disabled:hover:bg-red-300 p-3 text-white duration-300 hover:bg-red-400",
        className
      )}
    >
      <span className="inline-flex ">{children}</span>
    </button>
  );
};

Button.propTypes = {
  isActive: PropTypes.bool,
};

export default Button;
