import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Idea from '../components/Idea'
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    root: {
        //   marginLeft: "10px",
    }
}));

export default function IndeasList() {
    const classes = useStyles();
    const counter = useSelector(state => state.counter);
    const ideasList = useSelector(state => state.ideasList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: "GET_IDEAS" });
    }, []);
   
    
    return (
        <div>
            <br/>
            <Fab color="primary" aria-label="add">{counter}</Fab>
            <Typography variant="h6" display="h2">Total Ideas</Typography>


            <div>
                {/* <TextField
                    id="SearchInput"
                    placeholder="Filter Ideas"
                    margin="normal"
                    onChange={searchInputChange}
                /> */}
                <Grid container spacing={2} className={classes.root}>
                    <Grid key={0} item xs={12} sm={6} lg={2} xl={3}>
                        <Idea ideasList={ideasList} dispatch={dispatch} />
                    </Grid>
                    {ideasList.map((idea, key) => {
                        return <Grid key={key + 1} item xs={12} sm={6} lg={2} xl={3}>
                            <Idea idea={idea} ideasList={ideasList} dispatch={dispatch} />
                        </Grid>
                    })}
                </Grid>
            </div>
        </div>);
}