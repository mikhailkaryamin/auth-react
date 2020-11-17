import React from 'react';
import { Link } from 'react-router-dom';

import { Route as AppRoute } from '../shared/routes';

import Input from './Input';

const Home: React.FC = () => {
  return (
    <div className="home">
      <span className="home__text">
        Welcome, Friend!!! <br />
        Do you have account? <br />
        Yes?
      </span>
      <Link
        className={`home__link`}
        to={AppRoute.LOGIN}
      >
        <Input
          prefix={`form__button`}
          type={`button`}
          value={`Sign in`}
        />
      </Link>
      <span className="home__text">
        or No?
      </span>
      <Link
        to={AppRoute.REGISTER}
        className={`home__link`}
      >
        <Input
          prefix={`form__button`}
          type={`button`}
          value={`Sign up`}
        />
      </Link>
    </div>
  );
};

export default Home;
