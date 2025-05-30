import { ReactNode } from "react";
import { motion } from "framer-motion";

interface StepProps {
  isActive: boolean;
  stepNumber: number;
  children: ReactNode;
  onNext?: () => void;
  onPrevious?: () => void;
  isFirstStep?: boolean;
  isLastStep?: boolean;
  hideNavigation?: boolean; // Add this new prop
}

export default function Step({
  isActive,
  stepNumber,
  children,
  onNext,
  onPrevious,
  isFirstStep = false,
  isLastStep = false,
  hideNavigation = false, // Default to false
}: StepProps) {
  if (!isActive) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="bg-black bg-opacity-70 backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-xl"
      data-step={stepNumber}
    >
      {children}

      {!hideNavigation && ( // Only show navigation if hideNavigation is false
        <div className="flex justify-between mt-8">
          {!isFirstStep && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={onPrevious}
              className="bg-gray-700 text-white py-1.5 px-3 sm:py-3 sm:px-6 rounded-lg flex items-center gap-2 text-xs sm:text-base font-medium hover:bg-gray-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Previous</span>
            </motion.button>
          )}

          {isFirstStep && <div></div>}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type={isLastStep ? "submit" : "button"}
            onClick={isLastStep ? undefined : onNext}
            className={`${"bg-white text-black"} py-1.5 px-3 sm:py-3 sm:px-6 rounded-lg flex items-center gap-2 text-xs sm:text-base font-medium`}
          >
            <span>{isLastStep ? "Submit Registration" : "Next step"}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </motion.button>
        </div>
      )}
    </motion.div>
  );
}
