// Form validation utilities
export interface ValidationError {
  field: string;
  message: string;
}

export interface dataRegistrationProps {
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
  programmingSkill: string;
  electronicsSkill: string;
  mechanicalSkill: string;
  anythingElse: string;
  motivation: string;
  howHeard: string;
  howHeardOther?: string;
  participatedBefore: string;
  previousCompetitionDetails?: string;
  formalRoboticsTraining: string;
  roboticsTrainingDetails?: string;
  code: string;
}

export const validateRegistrationForm = (
  formData: dataRegistrationProps
): ValidationError[] => {
  const errors: ValidationError[] = [];

  // Required fields validation
  const requiredFields: { field: keyof dataRegistrationProps; label: string }[] = [
    { field: "firstName", label: "First Name" },
    { field: "lastName", label: "Last Name" },
    { field: "email", label: "Email" },
    { field: "phone", label: "Phone Number" },
    { field: "wilaya", label: "Wilaya" },
    { field: "dob", label: "Date of Birth" },
  ];

  // Add conditional required fields
  if (formData.teamAction === "create") {
    requiredFields.push({ field: "teamName", label: "Team Name" });
  } else if (formData.teamAction === "join") {
    requiredFields.push({ field: "teamId", label: "Team ID" });
  }

  // Check required fields
  requiredFields.forEach(({ field, label }) => {
    const value = formData[field];
    if (!value || (typeof value === "string" && value.trim() === "")) {
      errors.push({
        field,
        message: `${label} is required`,
      });
    }
  });

  // Email validation
  if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.push({
      field: "email",
      message: "Please enter a valid email address",
    });
  }

  // Phone validation (simple format check)
  if (
    formData.phone &&
    !/^\d{10,15}$/.test(formData.phone.replace(/[^0-9]/g, ""))
  ) {
    errors.push({
      field: "phone",
      message: "Please enter a valid phone number",
    });
  }

  // Date of birth validation (must be in the past)
  if (formData.dob) {
    const dobDate = new Date(formData.dob);
    const today = new Date();

    if (isNaN(dobDate.getTime())) {
      errors.push({
        field: "dob",
        message: "Please enter a valid date",
      });
    } else if (dobDate >= today) {
      errors.push({
        field: "dob",
        message: "Date of birth must be in the past",
      });
    }
  }

  return errors;
};
