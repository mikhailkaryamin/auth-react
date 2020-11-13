import React from 'react';

type Props = {
  placeholder?: string;
  prefix?: string;
  type: string;
  value?: string;
}

const Input: React.FC<Props> = ({ placeholder, prefix, type, value }: Props) => {
  return (
    <input
      placeholder={placeholder}
      className={`input ${prefix ? prefix : ``}`}
      type={type}
      value={value}
    />
  );
};

export default Input;
