"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Step from "@/components/Step";
import ProgressBar from "@/components/ProgressBar";
import RadioButton from "./RadioButton";
import JoinTeam from "./JoinTeam";
import { supabase } from "../../lib/supabaseClient";
import { MemberInformationsDetails } from "./MemberInformationsDetails";
import FormInput from "@/components/FormInput";
import { dataRegistrationProps } from "@/utils/validation";
import Link from "next/link";

export default function Content() {
  const [step, setStep] = useState(0);
  const [teamType, setTeamType] = useState("solo");
  const [teamAction, setTeamAction] = useState("create");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [registeredTeamId, setRegisteredTeamId] = useState("");
  const [formData, setFormData] = useState({
    teamAction: "create",
    teamId: "",
    teamName: "",
    teamMembers: "solo",
    membersCount: 1,
    email: "",
    firstName: "",
    lastName: "",
    programmingSkill: "Beginner",
    electronicsSkill: "Beginner",
    mechanicalSkill: "Beginner",
    phone: "",
    wilaya: "",
    dob: "",
    university: "",
    fos: "",
    yos: "",
    motivation: "",
    howHeard: "",
    howHeardOther: "",
    participatedBefore: "No",
    previousCompetitionDetails: "",
    formalRoboticsTraining: "No",
    roboticsTrainingDetails: "",
    anythingElse: "",
    code: "",
  });

  /**
   * Registers a new team and its team leader in the database.
   *
   * @param {dataRegistrationProps} formData - The registration form data,
   * including team and participant details.
   *
   * The function performs the following actions:
   * - Sets the loading state to true.
   * - Inserts a new team into the "teams" table, marking it as solo if applicable.
   * - If the team insertion is successful, inserts the team leader into the "participants" table.
   * - Sets the registered team ID if both insertions succeed.
   * - Handles errors during the registration process, updating the error state and stopping the loading state.
   * - Advances to the next step upon successful registration.
   */

  /*******  44cc980f-2b47-49f5-bf6d-53334721484e  *******/
  const storeTeamRegistration = async (formData: dataRegistrationProps) => {
    setIsLoading(true);
    setError("");
    
    try {
      const teamInsertData = {
      name: formData.teamName,
      is_solo: formData.teamMembers === "solo",
    };
 // Insert the team record
      const { data: teamData, error: teamError } = await supabase
        .from("teams")
        .insert([teamInsertData])
        .select("id, code");

        
      if (teamError || !teamData || teamData.length === 0) {
        throw new Error(
          teamError?.message || "Failed to create team. Please try again."
        );
      }

      const teamId = teamData[0].id as string;

      // Insert the participant record linked to the team
      const { data: participantData, error: participantError } = await supabase
        .from("participants")
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            birth_date: formData.dob,
            email: formData.email,
            phone_number: formData.phone,
            wilaya: formData.wilaya,
            team_id: teamId,
            university: formData.university,
            field_of_study: formData.fos,
            year_of_study: formData.yos,
            motivation: formData.motivation,
            anything_else: formData.anythingElse,
            programming_skill: formData.programmingSkill,
            electronics_skill: formData.electronicsSkill,
            mechanical_skill: formData.mechanicalSkill,
            howHeard: formData.howHeard,
            how_heard_other: formData.howHeard === "Other" ? formData.howHeardOther : null,
            participated_before: formData.participatedBefore === "Yes",
            previous_competition_details: formData.participatedBefore === "Yes" ? formData.previousCompetitionDetails : null,
            formal_robotics_training: formData.formalRoboticsTraining === "Yes",
            robotics_training_details: formData.formalRoboticsTraining === "Yes" ? formData.roboticsTrainingDetails : null,
          },
        ])
        .select();

      if (
        participantError ||
        !participantData ||
        participantData.length === 0
      ) {
        throw new Error(
          participantError?.message ||
            "Failed to register participant. Please try again."
        );
      }

      // Save the team code for later use (e.g., thank you page)
      setRegisteredTeamId(teamData[0].code);

      // Move to the next step
      nextStep();
    } catch (error) {
      setError("An error occurred while registering the team");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const storeMemberRegistration = async (formData: dataRegistrationProps) => {
    try {
      setIsLoading(true);

      // First check if the team exists and get its details
      const { data: teamData, error: teamError } = await supabase
        .from("teams")
        .select("is_solo, participants(team_id), id")
        .eq("code", formData.code)
        .single();

      if (teamError) {
        throw new Error("Team not found");
      }

      if (!teamData) {
        throw new Error("Invalid team ID");
      }

      // Check team constraints
      const teamMembers = teamData.participants;
      if (teamData.is_solo) {
        throw new Error("Cannot join a solo team");
      }

      if (teamMembers.length >= 4) {
        throw new Error("The team is already full (maximum 4 members)");
      }

      const teamId = teamData.id;

      // Insert the new team member
      const { error: insertError } = await supabase
        .from("participants")
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            birth_date: formData.dob,
            email: formData.email,
            phone_number: formData.phone,
            wilaya: formData.wilaya,
            team_id: teamId,
            university: formData.university,         // ADDED
            field_of_study: formData.fos,           // ADDED
            year_of_study: formData.yos,            // ADDED
            programming_skill: formData.programmingSkill, // ADDED
            electronics_skill: formData.electronicsSkill, // ADDED
            mechanical_skill: formData.mechanicalSkill,  // ADDED
            motivation: formData.motivation,             // ADDED
            anything_else: formData.anythingElse,       // ADDED
            howHeard: formData.howHeard,                 // ADDED
            how_heard_other: formData.howHeard === "Other" ? formData.howHeardOther : null, // ADDED
            participated_before: formData.participatedBefore === "Yes", // ADDED (assuming BOOLEAN in DB)
            previous_competition_details: formData.participatedBefore === "Yes" ? formData.previousCompetitionDetails : null, // ADDED
            formal_robotics_training: formData.formalRoboticsTraining === "Yes", // ADDED (assuming BOOLEAN in DB)
            robotics_training_details: formData.formalRoboticsTraining === "Yes" ? formData.roboticsTrainingDetails : null, // 
          },
        ]);
        

      if (insertError) {
        console.error(insertError);
        throw new Error("Failed to register team member");
      }

      // Set the registered team ID and move to next step
      setRegisteredTeamId(formData.teamId);
      setError("");
      nextStep();
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamType(e.target.value);
    setFormData({
      ...formData,
      teamMembers: e.target.value,
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    if (teamAction === "create") {
      await storeTeamRegistration(formData);
    } else {
      await storeMemberRegistration(formData);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-black">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bgmaze.webp"
          alt="Background Maze"
          fill
          className="object-cover opacity-5"
          priority
        />
      </div>

      {/* Loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
            <p className="text-white font-medium">
              Processing your registration...
            </p>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-start pt-24 px-4 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="block text-4xl md:text-5xl font font-bold text-white mb-5"
        >
          POLYMAZE Registration
        </motion.h1>

        {/* Progress bar */}
        <ProgressBar currentStep={step} totalSteps={4} />

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="w-full max-w-3xl"
        >
          {/* Step 0: Welcome */}
          <Step
            isActive={step === 0}
            stepNumber={0}
            onNext={nextStep}
            isFirstStep={true}
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Welcome to POLYMAZE
            </h2>
            <p className="text-white mb-6">
              <span className="font-bold">Welcome to POLYMAZE,</span> an
              exhilarating robotic competition where innovation meets adventure!
              This is your chance to showcase your skills in programming,
              electronics, and mechanical design while competing against the
              brightest minds in robotics. Join us for an unforgettable
              experience filled with creativity and cutting-edge technology. Are
              you ready to take on the POLYMAZE challenge and prove your
              prowess?
              <br />
              <br />
              Sign up now and let your robotic journey begin!
            </p>
          </Step>

          {/* Step 1: Team Information */}
          <Step
            isActive={step === 1}
            stepNumber={1}
            onNext={() => {
              if (teamAction === "create" && formData.teamName.trim() === "") {
                setError("Team Name is required.");
              } else {
                if (teamAction === "join" && formData.code.trim() === "") {
                  setError("Team Code is required.");
                } else {
                  setError("");
                  nextStep();
                }
              }
            }}
            onPrevious={prevStep}
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Team Registration
            </h2>

            <div className="mb-6">
              <p className="text-white mb-3">
                Would you like to create a new team or join an existing one?
              </p>
              <div className="flex gap-6">
                <RadioButton
                  name="teamAction"
                  value="create"
                  checked={teamAction === "create"}
                  onChange={(e) => {
                    setTeamAction(e.target.value);
                    setFormData({
                      ...formData,
                      teamAction: e.target.value,
                    });
                  }}
                  label="Create a team"
                />

                <RadioButton
                  name="teamAction"
                  value="join"
                  checked={teamAction === "join"}
                  onChange={(e) => {
                    setTeamAction(e.target.value);
                    setFormData({
                      ...formData,
                      teamAction: e.target.value,
                    });
                  }}
                  label="Join a team"
                />
              </div>
            </div>

            {/* Create Team Options */}
            {teamAction === "create" && (
              <>
                <div className="mb-6">
                  <p className="text-white mb-3">
                    Will you participate solo or in a team?
                  </p>
                  <div className="flex gap-6">
                    <RadioButton
                      name="teamMembers"
                      value="solo"
                      checked={teamType === "solo"}
                      onChange={handleRadioChange}
                      label="Solo"
                    />

                    <RadioButton
                      name="teamMembers"
                      value="team"
                      checked={teamType === "team"}
                      onChange={handleRadioChange}
                      label="In a team"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <FormInput
                    type="text"
                    label="Team Name"
                    id="teamName"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleInputChange}
                    placeholder="Enter your team name"
                    required={teamAction === "create"}
                  />
                </div>
              </>
            )}

            {teamAction === "join" && (
              <JoinTeam code={formData.code} onChange={handleInputChange} />
            )}
          </Step>

          {/* Step 2: Additional Details */}
          <Step
            isActive={step === 2}
            stepNumber={2}
            onNext={() => {
              if (
                !formData.firstName ||
                !formData.lastName ||
                !formData.email ||
                !formData.phone ||
                !formData.wilaya ||
                !formData.dob ||
                !formData.university ||
                !formData.fos ||
                !formData.yos
              ) {
                setError("Please fill in all required fields");
                return;
              }

              nextStep();
            }}
            onPrevious={prevStep}
            isLastStep={false}
          >
            <MemberInformationsDetails
              formData={formData}
              handleInputChange={handleInputChange}
            />
          </Step>
          {/* Step 3: Motivation and skill Details */}

          <Step
            isActive={step === 3}
            stepNumber={3}
            onNext={() => {
              const reactEvent = {
                preventDefault: () => {},
              } as React.FormEvent;
              handleSubmit(reactEvent);
            }}
            onPrevious={prevStep}
            isLastStep={true}
          >
            <div className="flex flex-col gap-8">
              {/* Programming Skill */}
              <div>
                <label className="block text-white mb-2 font-medium">
                  Rate your programming skill{" "}
                  <span className="text-red-500">*</span>
                </label>
                {/* <label htmlFor={id} className="block text-white mb-2 font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
 */}
                <div className="flex gap-4">
                  {["Beginner", "Intermediate", "Advanced"].map((level) => (
                    <RadioButton
                      key={level}
                      name="programmingSkill"
                      value={level}
                      checked={formData.programmingSkill === level}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          programmingSkill: e.target.value,
                        })
                      }
                      label={level}
                    />
                  ))}
                </div>
              </div>

              {/* Electronics Skill */}
              <div>
                <label className="block text-white mb-2 font-medium">
                  Rate your electronics skill{" "}
                  <span className="text-red-500">*</span>
                </label>

                <div className="flex gap-4">
                  {["Beginner", "Intermediate", "Advanced"].map((level) => (
                    <RadioButton
                      key={level}
                      name="electronicsSkill"
                      value={level}
                      checked={formData.electronicsSkill === level}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          electronicsSkill: e.target.value,
                        })
                      }
                      label={level}
                    />
                  ))}
                </div>
              </div>

              {/* Mechanical Design Skill */}
              <div>
                <label className="block text-white mb-2 font-medium">
                  Rate your mechanical skill{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-4">
                  {["Beginner", "Intermediate", "Advanced"].map((level) => (
                    <RadioButton
                      key={level}
                      name="mechanicalSkill"
                      value={level}
                      checked={formData.mechanicalSkill === level}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          mechanicalSkill: e.target.value,
                        })
                      }
                      label={level}
                    />
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-white mb-2 font-medium">
                  {/* motivation*/}
                  What motivated you to participate in POLYMAZE?
                  <span className="text-red-500">*</span>
                </label>
                <Textarea
                  className="bg-gray-800 border border-gray-700"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      motivation: e.target.value,
                    })
                  }
                  placeholder="Write your Motivation here."
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-2 font-medium flex flex-col gap-8">

                {/* How did you hear about us? */}
              <div >
                <label className="block text-white mb-2 font-medium">
                  How did you hear about our competition?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-col gap-4"> {/* Changed to flex-col for radio buttons */}
                  {[
                    "Through our social media platforms",
                    "TV/Radio",
                    "Through a friend",
                    "Other",
                  ].map((option) => (
                    <RadioButton
                      key={option}
                      name="howHeard"
                      value={option}
                      checked={formData.howHeard === option}
                      onChange={(e) =>
                        setFormData({ ...formData, howHeard: e.target.value })
                      }
                      label={option}
                    />
                  ))}
                </div>
                {formData.howHeard === "Other" && (
                  <div className="mt-6">
                    <FormInput
                      type="text"
                      label="Please specify other source"
                      id="howHeardOther"
                      name="howHeardOther"
                      value={formData.howHeardOther}
                      onChange={handleInputChange} // Use your existing handleInputChange
                      placeholder="Write the other source here."
                      required={formData.howHeard === "Other"}
                    />
                    
                  </div>
                )}
              </div>

              {/* Participated before? */}
              <div>
                <label className="block text-white mb-2 font-medium">
                  Have you participated in any robotics competitions before?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-4">
                  <RadioButton
                    name="participatedBefore"
                    value="Yes"
                    checked={formData.participatedBefore === "Yes"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        participatedBefore: e.target.value,
                      })
                    }
                    label="Yes"
                  />
                  <RadioButton
                    name="participatedBefore"
                    value="No"
                    checked={formData.participatedBefore === "No"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        participatedBefore: e.target.value,
                      })
                    }
                    label="No"
                  />
                </div>
                {formData.participatedBefore === "Yes" && (
                  <div className="mt-3">
                    <label className="block text-white mb-2 font-medium">
                      Please provide details (competition name, year,
                      achievements, etc.) <span className="text-red-500">*</span>
                    </label>
                    
                    <Textarea
                      className="bg-gray-800 border border-gray-700"
                      name="previousCompetitionDetails"
                      value={formData.previousCompetitionDetails}
                      onChange={(e) => // Direct onChange for Textarea
                        setFormData({
                          ...formData,
                          previousCompetitionDetails: e.target.value,
                        })
                      }
                      placeholder="e.g., ARC 2024 - 3rd Place"
                      required={formData.participatedBefore === "Yes"}
                    />
                  </div>
                )}
              </div>

              {/* Formal robotics training? */}
              <div>
                <label className="block text-white mb-2 font-medium">
                  Do you have any formal training or education in robotics?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-4">
                  <RadioButton
                    name="formalRoboticsTraining"
                    value="Yes"
                    checked={formData.formalRoboticsTraining === "Yes"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        formalRoboticsTraining: e.target.value,
                      })
                    }
                    label="Yes"
                  />
                  <RadioButton
                    name="formalRoboticsTraining"
                    value="No"
                    checked={formData.formalRoboticsTraining === "No"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        formalRoboticsTraining: e.target.value,
                      })
                    }
                    label="No"
                  />
                </div>
                {formData.formalRoboticsTraining === "Yes" && (
                  <div className="mt-3">
                    <label className="block text-white mb-2 font-medium">
                      Please specify the type of training or education <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      className="bg-gray-800 border border-gray-700"
                      name="roboticsTrainingDetails"
                      value={formData.roboticsTrainingDetails}
                      onChange={(e) => // Direct onChange for Textarea
                        setFormData({
                          ...formData,
                          roboticsTrainingDetails: e.target.value,
                        })
                      }
                      placeholder="e.g., Online Course, Workshop..."
                      required={formData.formalRoboticsTraining === "Yes"}
                    />
                  </div>
                )}
              </div>






                  {/* anything to add */}
                  Is there anything else you would like to share or ask about
                  the competition? 
                </label>

                <Textarea
                  className="bg-gray-800 border border-gray-700"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      anythingElse: e.target.value,
                    })
                  }
                  placeholder="Write any questions or remarks you have."
                />
              </div>
            </div>
          </Step>

          {/* Step 3: Thank You Page */}
          <Step
            isActive={step === 4}
            stepNumber={4}
            isLastStep={false}
            hideNavigation={true}
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <div className="w-24 h-24 rounded-full bg-green-500 mx-auto flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </motion.div>
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl font-bold text-white mb-4"
              >
                Registration Complete!
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-300 mb-8 text-lg"
              >
                Thank you for registering for POLYMAZE. Your registration has
                been confirmed.
              </motion.p>
              {teamAction === "create" && formData.teamMembers !== "solo" &&(
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8 inline-block"
                >
                  <h3 className="text-gray-400 text-sm mb-2">YOUR TEAM Code</h3>
                  <p className="text-2xl font-mono font-bold text-white tracking-wider">
                    {registeredTeamId}
                  </p>
                  <p className="text-gray-400 text-xs mt-2">
                    Keep this code safe – you need to give it to your teammates
                  </p>
                </motion.div>
              )}

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Link href="/">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-black py-3 px-8 rounded-lg font-medium"
                  >
                    Return to Home Page
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </Step>

          {error && (
            <div className="fixed bottom-4 right-4 z-50">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  onAnimationComplete={() => {
                    // Clear error after 10 seconds
                    setTimeout(() => {
                      setError("");
                    }, 7000);
                  }}
                >
                  <ErrorAlert message={error} />
                </motion.div>
              )}
            </div>
          )}
        </motion.form>
      </div>
    </div>
  );
}

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

// Custom alert component that displays error messages
const ErrorAlert = ({ message }: { message: string }) => {
  if (!message) return null;

  return (
    <Alert variant="destructive" className="mt-4 bg-red-600 text-white">
      <AlertCircle className="h-4 w-4 text-white" />
      <div>
        <AlertTitle className="text-white">Error</AlertTitle>
        <AlertDescription className="text-white">{message}</AlertDescription>
      </div>
    </Alert>
  );
};
