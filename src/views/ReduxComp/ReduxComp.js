import { Backdrop, Fade, FormControl, FormHelperText, Input, InputLabel, makeStyles, Modal } from "@material-ui/core";
import Button from "components/UI/Button/Button";
import EnhancedTable from "components/UI/DataGrid/DataGrid";
import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
    buttonWrapper: {
        display: 'flex',
        alignItems: 'flex-end',
        padding: '0px 0 20px 0'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    form: {
        "& .MuiFormControl-root": {
            marginBottom: theme.spacing(2),
            display: 'block'
        },
        "& button": {
            marginLeft: 'auto',
            display: 'block'
        }

    },
}));


const ReduxComp = () => {
    const classes = useStyles();
    const [openModal, setOpenModal] = useState(false);

    const closeHandler = () => {
        setOpenModal(false);
    }

    const openHandler = () => {
        setOpenModal(true);
    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const body = (
        <div className={classes.paper}>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                <FormControl>
                    <InputLabel htmlFor="name">Name</InputLabel>
                    <Input id="name" aria-describedby="name" {...register("name")} />
                    <FormHelperText id="name-helper-text">We will never share your name.</FormHelperText>
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="surname">Surname</InputLabel>
                    <Input id="surname" aria-describedby="surname" {...register("surname")} />
                    <FormHelperText id="name-helper-text">We will never share your surname.</FormHelperText>
                </FormControl>

                {errors.exampleRequired && <span>This field is required</span>}

                <Button type="submit" variant="contained">Add new item</Button>
            </form>
        </div>
    );
    const nodeRef = React.useRef(null);


    return (
        <Fragment>
            <div className={classes.buttonWrapper}>
                <Modal open={openModal}
                    disableStrictModeCompat
                    onClose={closeHandler}
                    className={classes.modal}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }} >
                    <Fade in={openModal}>
                        {body}
                    </Fade>
                </Modal>
                <Button onClick={openHandler}>Add item</Button>
            </div>
            <EnhancedTable></EnhancedTable>
        </Fragment>
    )
}

export default ReduxComp;