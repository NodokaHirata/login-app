import React from 'react';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = ({ type, label, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="mt-4 bg-green-700 text-white px-4 py-2 rounded"
    >
      {label}
    </button>
  );
};

export default Button;
