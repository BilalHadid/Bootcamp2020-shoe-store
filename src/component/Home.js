import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    border: "2px",
  },
  media: {
    height: 190,
  },
  line: {
    borderTop: "1px solid white",
    width: "10%",
    marginLeft: "15vh",
  },
});

export const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <div className="Home1">
        <div className="Main">
          <h1>Casual Sport Shoes</h1>
          <p className={classes.line}></p>
          <p>
            <span>Lorem Ipsum dolor</span> sit amet Concecature
          </p>
        </div>
      </div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent style={{ textAlign: "center" }}>
            <Typography gutterBottom variant="h5" component="h2">
              Bought From
            </Typography>
            <Typography variant="h5" style={{ color: "red" }}>
              Islamabad
            </Typography>
          </CardContent>
          <CardMedia
            className={classes.media}
            image="https://cdn.shopify.com/s/files/1/0143/1552/0054/products/681-2162-c_2400x.jpg?v=1569390463"
            title="Contemplative Reptile"
          />
        </CardActionArea>
      </Card>
    </div>
  );
};
