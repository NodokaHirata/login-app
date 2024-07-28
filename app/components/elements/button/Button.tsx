import React from 'react';

const Button = ({ onClick, label }: { onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; label: string }) => {
  return <button onClick={onClick} className="bg-blue-500 text-white p-2 rounded">{label}</button>;
};

export default Button;
