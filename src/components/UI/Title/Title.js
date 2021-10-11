import { Typography } from '@material-ui/core';
import React from 'react';

const Title = (props) => {
    return (
        <Typography variant="h4" component="h4" style={{ 'padding': props.spacing + 'px' }}>
            {props.children}
        </Typography>
    )
}

export default Title;