import React from 'react';
import { makeStyles } from  '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    Paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color:theme.palette.text.secondary,
    },
}));

const MyHeader = () => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>my-react-app</Paper>
            </Grid>
        </Grid>
    </div>
  );
}

export default MyHeader;