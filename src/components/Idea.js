import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const Idea = (props) => {
    return (<div>
        {props.idea ? (
            <Card>
                <CardMedia
                    style={{ height: 0, paddingTop: '56%' }}
                    image={props.idea.img}
                    title={props.idea.title || "Add Title"}
                />
                <CardContent>
                    <Typography gutterBottom variant="healine" component="h2">
                        {props.idea.title || "Please add title"}
                    </Typography>
                    <Typography gutterBottom component="p">
                        {props.idea.body || "Please add details"}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" onClick={()=>{}}>
                        Delete
                    </Button>
                </CardActions>
            </Card>
        ) : null}
    </div>);
}

export default Idea;