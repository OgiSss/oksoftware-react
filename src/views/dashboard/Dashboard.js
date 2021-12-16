import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Copyright from 'components/UI/Copyright';
import Bar from 'components/UI/Header';
import { Route, Switch } from 'react-router';
import Context from '../Context/Context';
import DashboardContent from './DashboardContent';
import Uncontrolled from '../../views/Uncontrolled/Uncontrolled';
import Styles from 'views/Styles/Styles';
import Portal from 'views/Portals/Portal';
import Memo from 'views/Memo/Memo';
import ReduxComp from 'views/ReduxComp/ReduxComp';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    }
}));

export default function Dashboard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Bar />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Switch>
                        <Route path="/context" component={Context} />
                        <Route path="/uncontrolled" component={Uncontrolled} />
                        <Route path="/styles" component={Styles} />
                        <Route path="/portal" component={Portal} />
                        <Route path="/memo" component={Memo} />
                        <Route path="/redux" component={ReduxComp} />
                        <Route path="/" component={DashboardContent} />
                    </Switch>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
    );
}
