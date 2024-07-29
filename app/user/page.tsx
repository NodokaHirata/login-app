"use client";
import React, { useEffect, useState } from "react";

export default function UserPage() {
  // State to store user data
  const [user, setUser] = useState({ name: "", email: "", nationality: "" });

  // Fetch user data when component mounts
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("/api/user");
      const data = await res.json();
      setUser(data);
    };

    fetchUser();
  }, []);

  return (
    // Main container for centering content
    <div className="flex flex-col items-center justify-center min-h-screen py-4 bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        {/* Page title */}
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
          User Page
        </h1>
        {/* User details */}
        <div className="border-t border-gray-200 pt-4">
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Name:</span> {user.name}
          </p>
          <p className="text-lg text-gray-700 mt-2">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p className="text-lg text-gray-700 mt-2">
            <span className="font-semibold">Nationality:</span>{" "}
            {user.nationality}
          </p>
        </div>
      </div>
    </div>
  );
}
