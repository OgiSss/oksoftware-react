import React, { createRef, Fragment, useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { clearError, clearState, loginUser, userSelector } from 'store/userSlice';
import './SignIn.css';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const initialFormValues = {
    email: '',
    password: '',
    rememberMe: false
}



export default function SignIn() {
    // const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const { formValues, handleInputChange } = useForm(initialFormValues);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const { isSuccess, isError, errorMessage } = useSelector(userSelector);

    const formHandler = (event) => {
        event.preventDefault();

        dispatch(loginUser(formValues));
    }

    const handleClose = (event, reason) => {

        if (reason === 'clickaway') {
            return;
        }

        dispatch(clearError());
    };

    //Destroy 
    useEffect(() => {
        return () => {
            dispatch(clearState());
        };
    }, []);

    //Wait until promise is success or error
    useEffect(() => {
        if (isSuccess) {
            dispatch(clearState());
            history.push('/');
        }

        setOpenSnackbar(isError);
    }, [isSuccess, isError]);

    const errors = [];

    if (errorMessage) {
        errors.push(errorMessage);
    }

    const alertRef = createRef();

    return (
        <Fragment>
            <div className='login'>
                <img className="wave" src="img/wave.png" />
                <div className="container">
                    <div className="img">
                        <img src="img/bg.svg" />
                    </div>
                    <div className="login-content">
                        <form noValidate onSubmit={formHandler}>
                            <img src="img/avatar.svg" />
                            <h2 className="title">Welcome</h2>
                            <div className="input-div one">
                                <div className="i">
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <div className="div">
                                    <TextField
                                        variant="standard"
                                        margin="none"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        value={formValues.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="input-div pass">
                                <div className="i">
                                    <FontAwesomeIcon icon={faLock} />
                                </div>
                                <div className="div">
                                    <TextField
                                        variant="standard"
                                        margin="none"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        value={formValues.password}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <a href="#">Forgot Password?</a>
                            <input type="submit" className="btn" value="Login" />
                        </form>
                    </div>
                </div>
            </div>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleClose} ref={alertRef}>
                <Alert severity="error" >
                    {errors?.join(' ')}
                </Alert>
            </Snackbar>
        </Fragment>
    );
}