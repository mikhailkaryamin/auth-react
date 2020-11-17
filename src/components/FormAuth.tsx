import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { login } from '../services/auth';
import { register } from '../services/auth';
import { Route as AppRoute } from '../shared/routes';

import Input from './Input';

type Props = {
  route: string
}

const FormAuth: React.FC<Props> = ({ route }: Props) => {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [username, setUsername] = useState(``);

  const onLogin = (evt: React.SyntheticEvent) => {
    evt.preventDefault();

    if (username && password) {
      login(username, password).then(
          () => {
            // eslint-disable-next-line no-console
            console.log('success');
          },
          (err) => {
            // eslint-disable-next-line no-console
            console.log(err.response.data.message);
          }
      );
    }
  };

  const onRegister = (evt: React.SyntheticEvent) => {
    evt.preventDefault();

    if (email && password && username) {
      register(username, email, password).then(
          () => {
            // eslint-disable-next-line no-console
            console.log('success');
          },
          (err) => {
            // eslint-disable-next-line no-console
            console.log(err.response.data.message);
          }
      );
    }
  };

  const onSubmit = (evt: React.SyntheticEvent) => {
    switch (route) {
      case AppRoute.LOGIN:
        return (
          onLogin(evt)
        );

      case AppRoute.REGISTER:
        return (
          onRegister(evt)
        );

      default:
        return false;
    }
  };

  return (
    <form
      className="form"
      onSubmit={onSubmit}
    >
      <label className="form__title">
        Sign in
      </label>

      {route === AppRoute.REGISTER && (
        <label className="form__input">
          <Input
            placeholder={`Email`}
            onChange={setEmail}
            type={`email`}
          />
        </label>
      )}

      <label className="form__input">
        <Input
          placeholder={`Login`}
          onChange={setUsername}
          type={`text`}
        />
      </label>
      <label className="form__input">
        <Input
          placeholder={`Password`}
          onChange={setPassword}
          type={`password`}
        />
      </label>

      {route === AppRoute.LOGIN && (
        <Input
          prefix={`form__button`}
          type={`submit`}
          value={`Sign in`}
        />
      )}

      {route === AppRoute.REGISTER && (
        <Input
          prefix={`form__button`}
          type={`submit`}
          value={`Sign up`}
        />
      )}

      <Link
        to={AppRoute.ROOT}
        className={`form__button`}
      >
        <Input
          prefix={`form__button`}
          type={`button`}
          value={`Back`}
        />
      </Link>
    </form>
  );
};

export default FormAuth;
