'use client';
import React, { useState } from "react";
import Input from "../components/elements/input/Input";
import Button from "../components/elements/button/Button";

// Component for account creation page
export default function AccountPage() {
    // State variables for email, username, and nationality inputs
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [nationality, setNationality] = useState("");

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert("Account created successfully!");
  };

  return (
    // Page container with background image and styling
    <div className="relative h-full w-full bg-[url('/images/pexels-stywo-1261728.jpg')] bg-no-repeat bg-fixed bg-cover flex items-center justify-center py-[2cm]">
      <div className="flex items-center justify-center w-full h-full">
        <div className="bg-gray-700 bg-opacity-90 px-14 py-14 self-center lg:w-2/5 lg:max-w-md rounded-md">
          <h2 className="text-white text-4xl mb-8 font-semibold">Personal details</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              label="Email"
              value={email}
            />
            <Input
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              label="Username"
              value={username}
            />
            <Input
              id="nationality"
              onChange={(e) => setNationality(e.target.value)}
              type="text"
              label="Nationality"
              value={nationality}
            />
            <Button type="submit" label="Add personal details" />
          </form>
        </div>
      </div>
    </div>
  );
}
