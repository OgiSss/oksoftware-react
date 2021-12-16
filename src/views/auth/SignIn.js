import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../../components/UI/Copyright/Copyright';
import useForm from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { Link as LinkRouter, useHistory } from 'react-router-dom';
import { clearState, loginUser, userSelector } from 'store/userSlice';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const initialFormValues = {
    email: '',
    password: '',
    rememberMe: false
}

export default function SignIn() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const { formValues, handleInputChange } = useForm(initialFormValues);
    const [openSnackbar, setOpenSnackbar] = React.useState(false);

    const { isSuccess, isError, errorMessage } = useSelector(userSelector);

    const formHandler = (event) => {
        event.preventDefault();

        dispatch(loginUser(formValues));
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackbar(false);
    };

    useEffect(() => {
        return () => {
            dispatch(clearState());
        };
    }, []);

    useEffect(() => {
        if (isSuccess) {
            dispatch(clearState());
            history.push('/');
        }

        if (isError) {
            setOpenSnackbar(true);
        }
    }, [isSuccess, isError]);

    const errors = [];

    if (errorMessage) {
        errorMessage?.forEach((item) => item.messages?.forEach((element) => errors.push(element.message)));
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate onSubmit={formHandler}>
                    <TextField
                        variant="outlined"
                        margin="normal"
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
                    <TextField
                        variant="outlined"
                        margin="normal"
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
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={formValues.rememberMe}
                                onChange={handleInputChange}
                                name="rememberMe"
                                color="primary" />
                        }
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link to="/forgot-password" component={LinkRouter} variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link component={LinkRouter} to="/sign-up" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    {errors?.join(' ')}
                </Alert>
            </Snackbar>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}