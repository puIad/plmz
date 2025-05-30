import { motion } from "framer-motion";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({
  currentStep,
  totalSteps,
}: ProgressBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="w-full max-w-3xl mb-8"
    >
      <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="absolute h-full bg-gradient-to-r from-gray-200 to-white-500 transition-all duration-300 ease-in-out"
          style={{ width: `${(currentStep / (totalSteps - 1)) * 100}%` }}
        ></div>
      </div>
      <div className="flex justify-between mt-2">
        <div
          className={`flex flex-col items-center ${
            currentStep >= 0 ? "text-white" : "text-gray-500"
          }`}
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentStep >= 0 ? "bg-white" : "bg-gray-700"
            }`}
          >
            <i className="fa-solid fa-user-pen text-lg text-black"></i>
          </div>
          <span className="text-sm mt-1">Info</span>
        </div>
        <div
          className={`flex flex-col items-center ${
            currentStep >= 1 ? "text-white" : "text-gray-500"
          }`}
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentStep >= 1 ? "bg-white" : "bg-gray-700"
            }`}
          >
            <i className="fa-solid fa-users-gear text-lg text-black"></i>
          </div>
          <span className="text-sm mt-1">Team</span>
        </div>
        <div
          className={`flex flex-col items-center ${
            currentStep >= 2 ? "text-white" : "text-gray-500"
          }`}
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentStep >= 2 ? "bg-white" : "bg-gray-700"
            }`}
          >
            <i className="fa-solid fa-list-check text-lg text-black"></i>
          </div>
          <span className="text-sm mt-1">Details</span>
        </div>
        <div
          className={`flex flex-col items-center ${
            currentStep >= 3 ? "text-white" : "text-gray-500"
          }`}
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentStep >= 3 ? "bg-white" : "bg-gray-700"
            }`}
          >
            <i className="fa-solid fa-trophy text-lg text-black"></i>
          </div>
          <span className="text-sm mt-1">Skills & Info</span>
        </div>

        <div
          className={`flex flex-col items-center ${
            currentStep >= 4 ? "text-white" : "text-gray-500"
          }`}
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentStep >= 4 ? "bg-white" : "bg-gray-700"
            }`}
          >
            <i className="fa-solid fa-trophy text-lg text-black"></i>
          </div>
          <span className="text-sm mt-1">Complete</span>
        </div>
      </div>
    </motion.div>
  );
}
