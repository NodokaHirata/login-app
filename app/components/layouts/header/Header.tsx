import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <div className="text-xl font-bold">
          <Link href="/">My App</Link>
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
