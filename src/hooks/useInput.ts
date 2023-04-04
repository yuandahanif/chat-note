import { useState } from "react";

function useInput(
  defaultValue = ""
): [string, React.ChangeEventHandler<HTMLInputElement>] {
  const [value, setValue] = useState(defaultValue);

  const onValueChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setValue(event?.target?.value);
  };

  return [value, onValueChangeHandler];
}

export default useInput;
