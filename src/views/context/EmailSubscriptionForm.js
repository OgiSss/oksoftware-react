import { Box, Button, CircularProgress, Grid, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import Title from 'components/UI/Title/Title';
import { validateEmail } from 'helpers/validateEmail';
import React, { useState } from 'react';
import { useReducer } from 'react';

const emailReducer = (_, action) => {
    switch (action.type) {
        case 'USER_INPUT_EMAIL':
            return { email: action.payload.email, isValid: action.payload.isValid, touch: action.payload.touch };
        case 'USER_INPUT_EMAIL_RESET':
            return { email: '', isValid: false, touch: false };
        default:
            return { email: '', isValid: false, touch: false };
    }
};

const initState = {
    email: '',
    isValid: false,
    touch: false
};

const useStyles = makeStyles(() => ({
    buttonPadding: {
        marginBottom: '10px',
        width: '50%'
    },
    inlineProgress: {
        marginLeft: '20px',
        display: 'inline-flex'
    }

}));

const EmailSubscriptionForm = (props) => {
    const classesMaterial = useStyles();
    const [state, dispatch] = useReducer(emailReducer, initState);
    const [sentEmail, setSentEmail] = useState('');
    const [showProgress, setShowProgress] = useState(false);

    const handleInputEmail = (event) => {
        dispatch({
            type: 'USER_INPUT_EMAIL',
            payload: { email: state.email, isValid: state.isValid, touch: true }
        });

        if (validateEmail(event.target.value)) {
            dispatch({
                type: 'USER_INPUT_EMAIL',
                payload: { email: event.target.value, isValid: true, touch: true }
            });
        } else {
            dispatch({ type: 'USER_INPUT_EMAIL', payload: { email: event.target.value, isValid: false, touch: true } });
        }

    }

    const sendEmail = () => {
        setShowProgress(true);
        setTimeout(() => {
            setSentEmail(state.email);
            props.onEmailListChange(state.email)
            setShowProgress(false);
            dispatch({ type: 'USER_INPUT_EMAIL_RESET' });
        }, 1000);
    }

    const showError = !state.isValid && state.touch;
    return (
        <React.Fragment>
            <Title>Add email</Title>
            <TextField
                variant="outlined"
                margin="normal"
                required
                name="email"
                label="Email"
                type="email"
                id="email"
                value={state.email}
                onChange={handleInputEmail}
                {...showError && { error: true, helperText: 'Email is invalid' }}

            />
            <Grid>
                <Button onClick={sendEmail}
                    {...(!state.isValid) && { disabled: true }}
                    className={clsx(classesMaterial.buttonPadding)} variant="contained" color="primary" href="#contained-buttons">
                    Add Email
                </Button>
                {
                    showProgress && <Box className={classesMaterial.inlineProgress} ><CircularProgress size={20} /></Box>
                }
            </Grid>

            {
                sentEmail && <Alert severity="success"> {sentEmail} has been sent successful.</Alert>
            }


        </React.Fragment>
    )
}

export default EmailSubscriptionForm;