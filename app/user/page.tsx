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
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">User Page</h1>
      <p className="mt-4 text-lg">Name: {user.name}</p>
      <p className="mt-2 text-lg">Email: {user.email}</p>
      <p className="mt-2 text-lg">Nationality: {user.nationality}</p>
    </div>
  );
}
