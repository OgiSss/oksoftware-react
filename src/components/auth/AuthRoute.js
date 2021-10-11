import React from "react";
import { Redirect, Route } from "react-router";
import PropTypes from 'prop-types';

const AuthRoute = ({ children, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                rest.isLogin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/sign-in",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AuthRoute;

AuthRoute.propTypes = {
    isLogin: PropTypes.bool,
    path: PropTypes.string,
    component: PropTypes.any
};