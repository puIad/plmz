"use client";

import FormInput from "@/components/FormInput";

export interface MemberInformationsDetailsProps {
  formData: {
    teamAction: string;
    teamId: string;
    teamName: string;
    teamMembers: string;
    membersCount: number;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    wilaya: string;
    dob: string;
    university: string;
    fos: string;
    yos: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function MemberInformationsDetails({
  formData,
  handleInputChange,
}: MemberInformationsDetailsProps) {
  return (
    <>
      <h2 className="text-2xl font-bold text-white mb-6">Personal Details</h2>

      <FormInput
        id="firstName"
        name="firstName"
        label="First Name"
        value={formData.firstName}
        onChange={handleInputChange}
        placeholder="Enter your first name"
        required
      />

      <FormInput
        id="lastName"
        name="lastName"
        label="Last Name"
        value={formData.lastName}
        onChange={handleInputChange}
        placeholder="Enter your last name"
        required
      />

      <FormInput
        id="email"
        name="email"
        label="Email Address"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Enter your email address"
        required
      />

      <FormInput
        id="phone"
        name="phone"
        label="Phone Number"
        type="tel"
        value={formData.phone}
        onChange={handleInputChange}
        placeholder="Enter your phone number"
        required
      />

      <FormInput
        id="dob"
        name="dob"
        label="Date of Birth"
        type="date"
        value={formData.dob as string}
        onChange={handleInputChange}
        required
      />

      <FormInput
        id="wilaya"
        name="wilaya"
        label="Wilaya"
        type="text"
        placeholder="Enter your Wilaya"
        value={formData.wilaya as string}
        onChange={handleInputChange}
        required
      />

      <FormInput
        id="university"
        name="university"
        label="University"
        type="text"
        placeholder="Enter your University"
        value={formData.university as string}
        onChange={handleInputChange}
        required
      />
      <FormInput
        id="fos"
        name="fos"
        label="Field of Study"
        type="select"
        value={formData.fos as string}
        onChange={handleInputChange}
        placeholder="Enter your Field of Study"
        required
      />

      <FormInput
        id="yos"
        name="yos"
        label="Year of Study"
        placeholder="Enter the Year of Study"
        type="text"
        value={formData.yos as string}
        onChange={handleInputChange}
        required
      />
    </>
  );
}
