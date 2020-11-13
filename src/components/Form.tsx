import React from 'react';

import Input from './Input';

const Form: React.FC = () => {
  return (
    <form className="form">
      <label className="form__title">
        Sign in
      </label>
      <label className="form__input">
        <Input
          placeholder={`Login`}
          type={`text`}
        />
      </label>
      <label className="form__input">
        <Input
          placeholder={`Password`}
          type={`password`}
        />
      </label>
      <Input
        prefix={`form__button`}
        type={`submit`}
        value={`Sign in`}
      />
    </form>
  );
};

export default Form;
