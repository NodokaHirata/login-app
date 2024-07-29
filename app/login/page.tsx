'use client';
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '../components/elements/input/Input';
import Button from '../components/elements/button/Button';
import { validateForm } from '../../utils/validators';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm(username, password);
    if (errors.username || errors.password) {
      setUsernameError(errors.username);
      setPasswordError(errors.password);
      return;
    }
    setUsernameError('');
    setPasswordError('');
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (res.ok) {
      router.push('/user');
    } else {
      setError(data.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Login Page</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-1/3">
        <div className="mb-4">
          <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
          {usernameError && <p className="text-red-500 mt-1">{usernameError}</p>}
        </div>
        <div className="mb-4">
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          {passwordError && <p className="text-red-500 mt-1">{passwordError}</p>}
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <Button type="submit" label="Login" />
      </form>
    </div>
  );
}
