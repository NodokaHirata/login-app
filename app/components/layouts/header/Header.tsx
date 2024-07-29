import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-700 text-white p-4">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/images/art-6905164_1280.png" alt="Logo" className="h-12 w-auto" />
          <Link href="/" className="text-xl font-bold ml-4">My App</Link>
        </div>
        <div>
          <Link href="/login" className="mr-4">Login</Link>
          <Link href="/user">User</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
