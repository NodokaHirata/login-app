import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      <p className="mt-4 text-lg">
        <Link href="/login">
          <span className="text-blue-500 cursor-pointer">Go to Login Page</span>
        </Link>
      </p>
    </div>
  );
}

