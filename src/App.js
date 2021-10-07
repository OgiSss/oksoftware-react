import './App.css';
import Dashboard from './views/dashboard/Dashboard';
import React, { useEffect } from 'react';

import { Route, Switch, useHistory } from "react-router-dom";
import SignIn from './views/auth/SignIn';
import SignUp from './views/auth/SignUp';
import AuthRoute from './components/auth/AuthRoute';
import { useSelector } from 'react-redux';
import ForgotPassword from 'views/auth/ForgotPassword';


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
