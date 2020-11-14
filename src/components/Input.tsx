import React from 'react';

type Props = {
  placeholder?: string;
  prefix?: string;
  onClick?: () => void;
  type: string;
  value?: string;
}

const Input: React.FC<Props> = ({ placeholder, prefix, onClick, type, value }: Props) => {
  const onSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    onClick?.();
  };

  return (
    <input
      placeholder={placeholder}
      className={`input ${prefix ? prefix : ``}`}
      onClick={onSubmit}
      type={type}
      value={value}
    />
  );
};

export default Input;
