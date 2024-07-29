import React from 'react';

interface InputProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ type, value, onChange, placeholder }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-black"
    />
  );
};

export default Input;
