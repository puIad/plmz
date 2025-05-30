"use client";

import { Input } from "@/components/ui/input";

export interface JoinTeamProps {
  code: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function JoinTeam({ code, onChange }: JoinTeamProps) {
  return (
    <div className="mb-6">
      <label htmlFor="teamId" className="block text-white mb-2 font-medium">
        Team Code <span className="text-red-500">*</span>
      </label>
      <Input
        type="text"
        id="code"
        name="code"
        value={code}
        onChange={onChange}
        placeholder="Enter the team Code to join"
        required
        className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <p className="text-gray-400 text-sm mt-2">
        Enter the team code provided by your team leader
      </p>
    </div>
  );
}
