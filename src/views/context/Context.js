import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import EmailSubscriptionForm from './EmailSubscriptionForm';
import SubscriptionList from './SubscriptionLIst';
import SubscriptionListContext from './store/subscription-context';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },

}));

export default function Context() {
    const classes = useStyles();
    const [subscriptionList, setSubscriptionList] = useState({ list: [] });

    const emailsHandler = (email) => {
        setSubscriptionList((prevState) => {
            const list = [...prevState.list, email];
            return { list }
        })
    }

    const deleteEmailHandler = (index) => {
        setSubscriptionList((prevState) => {
            const list = [...prevState.list];
            list.splice(list.findIndex((item) => item === index), 1);
            return { list }
        })
    }

    return (
        <SubscriptionListContext.Provider value={{ subscriptionList: subscriptionList.list, deleteEmailHandler }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={6}>
                    <Paper className={classes.paper}>
                        <EmailSubscriptionForm onEmailListChange={emailsHandler} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        <SubscriptionList></SubscriptionList>
                    </Paper>
                </Grid>
            </Grid>
        </SubscriptionListContext.Provider >
    );
}