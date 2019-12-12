import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import moment from 'moment';
// import { useSelector, useDispatch } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    card: {
        minWidth: "200px",
        minHeight: "200px",
    },
    addCard: {
        minWidth: "200px",
        minHeight: "200px",
        backgroundColor: "rgba(65,185,81,0.6)"
    },
    cardAction: {
        //    textAlign:"center",
        justifyContent: 'flex-end'
    },
    body: {
        borderBottom: "rgba(0,0,0,0)",
    },
    titleRezise: {
        fontSize: 12,
        fontWeight: "bold",
        textAlign: "center"
    },
    bodyResize: {
        fontSize: 12,
        // textAlign: "center"
    },
    image: {
        height: 0,
        paddingTop: '50%'
    }
}));
// const useStyles = makeStyles();


const Idea = (props) => {
    const [cardFocus, setCardFocus] = useState(false);
    const [titleFocus, setTitleFocus] = useState(false);
    const [bodyFocus, setBodyFocus] = useState(false);
    const classes = useStyles();
    useEffect(() => {
        if (props.idea && !props.idea.title) {

            document.getElementById(`Title${props.ideasList.length}`).focus();
        }
    }, []);

    function deleteIdea(id) {

        props.dispatch({ type: "DELETE_IDEA", id });
    }
    function addIdea() {
        props.dispatch({ type: "ADD_IDEA" });
    }
    function updateIdea(id) {
        setTitleFocus(false);
        setBodyFocus(false);
        let title = document.getElementById("Title" + id).value;
        let body = document.getElementById("Body" + id).value;
        props.dispatch({ type: "UPDATE_IDEA", data: { id, title, body } });
    }


    return (<div>
        {props.idea ? (
            <Card className={classes.card}
                onMouseEnter={() => { setCardFocus(true) }}
                onMouseLeave={() => { setCardFocus(false) }}
            >
                <CardContent>
                    {(cardFocus || titleFocus || bodyFocus) && <CardMedia
                        className={classes.image}
                        image={props.idea.img || "https://marketingland.com/wp-content/ml-loads/2015/11/idea_1920-800x600.jpg"}
                    />}
                    {/* {console.log(`Title${props.key}`,props)} */}
                    <TextField
                        id={"Title" + props.idea.id}
                        onFocus={() => { setTitleFocus(true) }}
                        onBlur={() => { updateIdea(props.idea.id) }}
                        InputProps={{
                            disableUnderline: !titleFocus,
                            classes: {
                                input: classes.titleRezise,
                            },
                        }}
                        defaultValue={props.idea.title}
                        placeholder="Please add title"
                    />
                    <TextField
                        id={"Body" + props.idea.id}
                        onFocus={() => { setBodyFocus(true) }}
                        onBlur={() => { updateIdea(props.idea.id) }}
                        InputProps={{
                            disableUnderline: !bodyFocus,
                            classes: {
                                input: classes.bodyResize,
                            },
                        }}
                        multiline
                        rows="5"
                        defaultValue={props.idea.body}
                        placeholder={"Please add details"}
                    />
                </CardContent>
                <CardActions className={classes.cardAction}>
                    {}
                    <Typography variant="caption" display="block">{moment(parseInt(props.idea.created_date)).format("DD/MM/YYYY")}</Typography>
                    {(cardFocus || titleFocus || bodyFocus) &&
                        <Button variant="contained" size="small" color="secondary" onClick={() => deleteIdea(props.idea.id)}>
                            Delete
                        </Button>}
                </CardActions>
            </Card>
        ) :
            (<Card className={classes.addCard}
                onClick={addIdea}
            >
                <CardContent>
                    <br />
                    <Typography variant="h6" display="h2">Add New Idea</Typography>
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </CardContent>
            </Card>)
        }
    </div>);
}

export default Idea;