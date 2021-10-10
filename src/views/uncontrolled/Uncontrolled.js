import { Grid, Paper } from '@material-ui/core';
import Title from 'components/UI/Title/Title';
import React from 'react';
import ControlledComp from './UncontrolledComp';
import UncontrolledComp from './ControlledComp';

const Uncontrolled = () => {

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={6}>
                    <Paper>
                        <Title>Uncontrolled</Title>
                        <ControlledComp />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper >
                        <Title>Controlled</Title>
                        <UncontrolledComp />
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Uncontrolled;