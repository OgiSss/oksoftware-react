import React from 'react';
import Button from '@material-ui/core/Button';

const ButtonCustom = (props) => {
    console.log('Button component for testing react memo') // for testing useMemo
    return (
        <Button variant="contained" color="primary" onClick={props.onClick}>
            {props.children}
        </Button>
    )
}

export default React.memo(ButtonCustom);
