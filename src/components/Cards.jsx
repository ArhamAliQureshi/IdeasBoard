import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
// import Card from "material-kit-react/src/components/Card/Card";
import CardBody from "material-kit-react/src/components/Card/CardBody";
import Button from "material-kit-react/src/components/CustomButtons/Button.js";

import imagesStyles from "material-kit-react/src/assets/jss/material-kit-react/imagesStyles.js";

import { cardTitle } from "material-kit-react/src/assets/jss/material-kit-react.js";

const styles = {
  ...imagesStyles,
  cardTitle,
};

const useStyles = makeStyles(styles);

export default function Cards() {
  const classes = useStyles();
  return (
    <Card style={{width: "20rem"}}>
      <img
        style={{height: "180px", width: "100%", display: "block"}}
        className={classes.imgCardTop}
        src="..."
        alt="Card-img-cap"
      />
      <CardBody>
        <h4 className={classes.cardTitle}>Card title</h4>
        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Button color="primary">Do something</Button>
      </CardBody>
    </Card>
  );
}