import React from 'react';

type Props = {
  placeholder?: string;
  prefix?: string;
  onChange?: (arg0: string) => void;
  type: string;
  value?: string;
}

const Input: React.FC<Props> = ({ placeholder, prefix, onChange, type, value }: Props) => {
  return (
    <input
      placeholder={placeholder}
      className={`input ${prefix ? prefix : ``}`}
      onChange={(evt) => onChange?.(evt.target.value)}
      type={type}
      value={value}
    />
  );
};

export default Input;
