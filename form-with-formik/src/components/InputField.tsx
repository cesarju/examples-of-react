import React from "react";
import { ChangeEvent } from "react";

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  onChange,
  value,
  label,
}) => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const changedValue = event.target.value;
    onChange(changedValue);
  };

  return (
    <label>
      {label}
      <input value={value} onChange={handleOnChange} />
    </label>
  );
};
