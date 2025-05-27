import React from "react";

interface RadioButtonProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  variant?: "white";
}

const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  value,
  checked,
  onChange,
  label,
  variant = "white",
}) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <div className="relative">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div
          className={`w-6 h-6 rounded-full border-2 ${
            checked
              ? variant === "white"
                ? "border-white"
                : "border-blue-500"
              : "border-gray-400"
          }`}
        >
          {checked && (
            <div
              className={`absolute inset-1 rounded-full ${
                variant === "white" ? "bg-white" : "bg-blue-500"
              }`}
            ></div>
          )}
        </div>
      </div>
      <span className="text-white">{label}</span>
    </label>
  );
};

export default RadioButton;
