import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome</h1>
      <p className="text-lg">
        <Link href="/login">
          <span className="text-blue-500 hover:text-blue-700 cursor-pointer">Login</span>
        </Link>
      </p>
    </div>
  );
}
