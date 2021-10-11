import './App.css';
import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import SignIn from './views/Auth/SignIn';
import SignUp from './views/Auth/SignUp';
import { useSelector } from 'react-redux';
import ForgotPassword from 'views/Auth/ForgotPassword';
import Dashboard from 'views/Dashboard/Dashboard';
import AuthRoute from 'components/auth/AuthRoute';

function App() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  let history = useHistory();

  useEffect(() => {
    history.push("/");

  }, [isLogin])

  return (
    <Switch>
      <Route path="/sign-up" component={SignUp} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <AuthRoute path="/" isLogin={isLogin}>
        <Dashboard></Dashboard>
      </AuthRoute>
    </Switch>
  );
}

export default App;
