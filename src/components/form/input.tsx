import { twMerge } from "tailwind-merge";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

const Input: React.FC<Props> = ({
  label,
  onChange,
  className,
  errorMessage,
  ...props
}) => {
  return (
    <label className="flex w-full flex-col ">
      <span className="mb-1 text-lg peer-invalid:text-red-500">{label}</span>
      <input
        {...props}
        onChange={onChange}
        className={twMerge(
          "peer rounded-md border-2 dark:text-slate-600  border-red-200 p-2 px-2 focus:outline-none",
          className
        )}
      />
      <span className="mt-2 hidden text-sm text-pink-600 peer-invalid:inline-block">
        {errorMessage}
      </span>
    </label>
  );
};

export default Input;
