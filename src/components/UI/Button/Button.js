import React from 'react';
import Button from '@material-ui/core/Button';

const ButtonCustom = (props) => {
    return (
        <Button variant="contained" color="primary" onClick={props.onClick}>
            {props.children}
        </Button>
    )
}

export default ButtonCustom;
