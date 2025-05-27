"use client";

import React from "react";
import FormInput from "./FormInput";

interface TeamMemberInputProps {
  index: number;
  formData: Record<string, string>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TeamMemberInput({
  index,
  formData,
  handleInputChange,
}: TeamMemberInputProps) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
      <h4 className="text-white font-medium mb-3">
        {index === 0 ? "Team Leader" : `Member ${index + 1}`}
      </h4>

      <div className="space-y-3">
        <FormInput
          id={`member${index}Name`}
          name={`member${index}Name`}
          label="Full Name"
          value={formData[`member${index}Name`] || ""}
          onChange={handleInputChange}
          placeholder="Enter full name"
          required
          className="py-2 px-3 text-sm"
        />

        <FormInput
          id={`member${index}Email`}
          name={`member${index}Email`}
          label="Email"
          type="email"
          value={formData[`member${index}Email`] || ""}
          onChange={handleInputChange}
          placeholder="Enter email address"
          required
          className="py-2 px-3 text-sm"
        />

        <FormInput
          id={`member${index}Phone`}
          name={`member${index}Phone`}
          label="Phone Number"
          type="tel"
          value={formData[`member${index}Phone`] || ""}
          onChange={handleInputChange}
          placeholder="Enter phone number"
          required
          className="py-2 px-3 text-sm"
        />
      </div>
    </div>
  );
}
