import {
    List, ListItem, ListItemAvatar, Avatar,
    ListItemText, ListItemSecondaryAction, IconButton, makeStyles
} from "@material-ui/core";
import React, { Fragment, useContext } from "react";
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import SubscriptionListContext from "./store/subscription-context";
import Title from "components/UI/Title/Title";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));


export default function SubscriptionList() {
    const classes = useStyles();

    const { subscriptionList, deleteEmailHandler } = useContext(SubscriptionListContext);

    // console.log(contextValue);

    return (
        <Fragment>
            <Title>Subscription list</Title>
            <div className={classes.demo}>
                <List dense={false}>
                    {subscriptionList.map((item, index) => {
                        return (
                            <ListItem key={index}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={item}
                                    secondary={'Active email '}
                                />
                                <ListItemSecondaryAction >
                                    <IconButton edge="end" aria-label="delete" onClick={() => deleteEmailHandler(index)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>

                        )
                    })}
                </List>
            </div>
        </Fragment>

    );
}
