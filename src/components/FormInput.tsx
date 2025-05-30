"use client";

import React from "react";
import { Input } from "./ui/input";

interface FormInputProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  min?: string | number;
  max?: string | number;
  className?: string;
}

export default function FormInput({
  id,
  name,
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = true,
  min,
  max,
  className = "",
}: FormInputProps) {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="block text-white mb-2 font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <Input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={true}
        min={min}
        max={max}
        className={`w-full bg-gray-800 text-white border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
      />
    </div>
  );
}
