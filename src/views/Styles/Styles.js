import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import styles from './Styles.module.css';
import styled from 'styled-components';


const Title = styled.h3`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  color: blue;
  border: 2px solid white;
`;

const Styles = () => {
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={6}>
                    <Paper className={styles.spacing}>
                        <h3 className={styles.title}>CSS module</h3>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={styles.spacing}>
                        <Title >Styled component</Title>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Styles;