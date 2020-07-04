import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  line: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export const Cards = () => {
  const classes = useStyles();
  const animals = [
    { id: 1, animal: "Dog" },
    { id: 2, animal: "Bird" },
    { id: 3, animal: "Cat" },
    { id: 4, animal: "Dog" },
    { id: 5, animal: "Bird" },
  ];

  return (
    <div className={classes.line}>
      {animals.map((item) => (
        <div key={item.id}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://cdn.shopify.com/s/files/1/0143/1552/0054/products/161-9512-b_360x.jpg?
          v=1586895688"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Bubble Scart Kid
                </Typography>
                <Typography>Rs: 10.00</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" variant="contained" color="secondary">
                Add To Card
              </Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
};
