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
    <label className="flex items-center gap-1 sm:gap-2 cursor-pointer">
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
          className={`w-4 h-4 sm:w-6 sm:h-6 rounded-full ${checked ? variant === "white" ? "bg-white" : "bg-blue-500" : "border-2 border-gray-400"}`}
        />
      </div>
      <span className="text-white text-xs sm:text-base">{label}</span>
    </label>
  );
};

export default RadioButton;
