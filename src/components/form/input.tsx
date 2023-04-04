import { twMerge } from "tailwind-merge";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<Props> = ({ label, onChange, className, ...props }) => {
  return (
    <label className="flex w-full flex-col">
      <div className="flex items-end justify-between">
        <span className="mb-1 text-lg">{label}</span>
      </div>
      <input
        {...props}
        type="text"
        onChange={onChange}
        className={twMerge(
          "rounded-md border-2 border-red-200 p-2 px-2 focus:outline-none",
          className
        )}
      />
    </label>
  );
};

export default Input;
