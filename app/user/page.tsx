'use client';
import React from 'react';
import { useEffect, useState } from 'react';

export default function UserPage() {
  const [user, setUser] = useState({ name: '', email: '', nationality: '' });

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch('/api/user');
      const data = await res.json();
      setUser(data);
    };

    fetchUser();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">User Page</h1>
        <div className="border-t border-gray-200 pt-4">
          <p className="text-lg text-gray-700"><span className="font-semibold">Name:</span> {user.name}</p>
          <p className="text-lg text-gray-700 mt-2"><span className="font-semibold">Email:</span> {user.email}</p>
          <p className="text-lg text-gray-700 mt-2"><span className="font-semibold">Nationality:</span> {user.nationality}</p>
        </div>
      </div>
    </div>
  );
}
