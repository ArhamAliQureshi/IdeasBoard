import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Idea from '../components/Idea'
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    root: {
        //   marginLeft: "10px",
    }
}));

export default function IndeasList() {
    const counter = useSelector(state => state.counter);
    const ideasList = useSelector(state => state.ideasList);
    const dispatch = useDispatch();

    const classes = useStyles();
    useEffect(() => {
        dispatch({ type: "GET_IDEAS" });
    }, []);
    function searchInputChange(query) {
        dispatch({ type: "GET_IDEAS", query: query.target.value });
    }

    const [sortBy, setSortBy] = useState("date");
    const handleSortChange = event => {
        setSortBy(event.target.value);

        // ideasList.sort((a, b) => {
        //     if (a.title < b.title) { return -1; }
        //     if (a.title > b.title) { return 1; }
        //     return 0;
        // })
    };

    // const [ideasList, setIdeasList] = useState(ideasList);



    return (
        <div>
            <br />
            <Grid container spacing={2} className={classes.root}>
                <Grid key={0} item xs={12} sm={6} lg={6} xl={6}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-helper-label">Sort By</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="SortBy"
                            label
                            defaultValue={sortBy}
                            onChange={handleSortChange}
                            autoWidth
                        >
                            {/* <MenuItem value="">
                            <em>None</em>
                        </MenuItem> */}
                            <MenuItem value={"date"}>Date</MenuItem>
                            <MenuItem value={"title"}>Title</MenuItem>

                        </Select>
                    </FormControl>
                </Grid>
                <Grid key={0} item xs={12} sm={6} lg={6} xl={6}>
                    <Fab color="primary" aria-label="add">{counter}</Fab>
                    <Typography variant="h6" display="h2">Total Ideas</Typography>
                </Grid>
            </Grid>
            <div>
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