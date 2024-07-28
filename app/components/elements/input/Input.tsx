import React from 'react';

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange, required = false }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="mb-4 p-2 w-full border border-gray-300 rounded"
      required={required}
    />
  );
};

export default Input;
