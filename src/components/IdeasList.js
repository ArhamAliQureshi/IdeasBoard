import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Idea from '../components/Idea'
import { useSelector, useDispatch } from 'react-redux'


export default function IndeasList() {
    useEffect(() => {
        dispatch({ type: "GET_IDEAS" });
    }, []);
    function searchInputChange(query) {
        dispatch({ type: "GET_IDEAS", query: query.target.value });
    }


    const counter = useSelector(state => state.counter);
    const ideasList = useSelector(state => state.ideasList);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Total Ideas:{counter}</h1>
            <div>
                {/* <TextField
                    id="SearchInput"
                    placeholder="Filter Ideas"
                    margin="normal"
                    onChange={searchInputChange}
                /> */}
                <Grid container spacing={24} style={{ padding: 24 }}>
                    {ideasList.map((idea, key) => {
                        return <Grid key={key} item xs={12} sm={6} lg={4} xl={3}>
                            <Idea idea={idea} />
                        </Grid>
                    })}
                </Grid>
            </div>
            <button onClick={() => dispatch({ type: "ADD_IDEA", counter: counter + 1 })}>Add Idea</button>
            <button onClick={() => dispatch({ type: "DELETE_IDEA", counter: counter - 1 })}>Delete Idea</button>
        </div>);
}