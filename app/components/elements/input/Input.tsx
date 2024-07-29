import React from 'react';

interface InputProps {
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  onChange,
  value,
  label,
  type,
}) => {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="
          block
          w-full
          px-6
          pt-7
          pb-3
          text-md
          text-white
          bg-neutral-700
          rounded-md
          appearance-none
          focus:outline-none
          focus:ring-0
          peer
        "
        placeholder=""
      />
      <label
        className="
          absolute
          top-5
          left-5
          z-10
          origin-[0]
          text-md
          text-zinc-400
          transform
          scale-75
          -translate-y-3
          duration-150
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-4
        "
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}

export default Input;
