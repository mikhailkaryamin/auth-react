import React from 'react';
import {
  Switch,
  Route,
  RouteComponentProps
} from 'react-router-dom';

import { Route as AppRoute } from '../shared/routes';

import Container from './Container';
import Home from './Home';
import FormAuth from './FormAuth';

const App: React.FC = () => {
  return (
    <Container>
      <Switch>
        <Route
          exact
          path={[AppRoute.HOME, AppRoute.ROOT]}
          component={Home}
        />
        <Route
          exact
          path={AppRoute.LOGIN}
          render={(props: RouteComponentProps) => {
            return (
              <FormAuth
                route={props.location.pathname}
              />
            );
          }}
        />
        <Route
          exact
          path={AppRoute.REGISTER}
          render={(props: RouteComponentProps) => {
            return (
              <FormAuth
                route={props.location.pathname}
              />
            );
          }}
        />
      </Switch>
    </Container>
  );
};

export default App;
