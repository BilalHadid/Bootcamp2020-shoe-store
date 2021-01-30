import React from "react";
import { useParams } from "react-router-dom";
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
    height: 200,
  },
});

const shoes = [
  {
    id: 1,
    name: "VALOUR BLUE",
    img:
      "https://i.pinimg.com/564x/d8/17/03/d817039e2f4ca479d8fe009850843ef9.jpg",
    descrip:
      "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
    Rs: "9.99",
  },
  {
    id: 2,
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://i.pinimg.com/564x/0e/a6/e3/0ea6e3c04993113c8a04f9ce61c6b6ff.jpg",
    descrip:
      "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
    Rs: "9.99",
  },
  {
    id: 3,
    name: "RACER BLUE",
    img:
      "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/851-9266-b_360x.jpg?v=1585297785",
    descrip:
      "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
    Rs: "9.99",
  },
  {
    id: 4,
    name: "RACER BLUE",
    img:
      "https://www.shoecarnival.com/dw/image/v2/BBSZ_PRD/on/demandware.static/-/Sites-scvl-master-catalog/default/dw7b241007/103543_205154_1.jpg?sw=700&sh=593&sm=fit",
    descrip:
      "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
    Rs: "9.99",
  },
  {
    id: 5,
    name: "Running Shoe",
    img: "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
    descrip:
      "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
    Rs: "9.99",
  },
  {
    id: 6,
    name: "Running Shoe",
    img:
      "https://i.pinimg.com/564x/b2/ea/3d/b2ea3d8872fa4c9e6cfae5d2b2fb5e62.jpg",
    descrip:
      "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
    Rs: "9.99",
  },

  {
    id: 7,
    name: "VALOUR BLUE",
    img:
      "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/853-6214-_2_360x.jpg?v=1591878784",
    descrip:
      "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
    Rs: "9.99",
  },
  {
    id: 8,
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://i.pinimg.com/564x/d8/17/03/d817039e2f4ca479d8fe009850843ef9.jpg",
    descrip:
      "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
    Rs: "9.99",
  },
  {
    id: 9,
    name: "RACER BLUE",
    img:
      "https://i.pinimg.com/564x/ef/47/15/ef4715083cad0521c6e5994addf3be6c.jpg",
    descrip:
      "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
    Rs: "9.99",
  },
  {
    id: 10,
    name: "RACER BLUE",
    img:
      "https://i.pinimg.com/564x/e5/9b/56/e59b5683c712cbb82365dfdc35a3b1bc.jpg",
    descrip:
      "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
    Rs: "9.99",
  },
  {
    id: 11,
    name: "Running Shoe",
    img:
      "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/859-9201-_2_360x.jpg?v=1592562290",
    descrip:
      "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
    Rs: "9.99",
  },
  {
    id: 12,
    name: "Running Shoe",
    img:
      "https://i.pinimg.com/564x/8d/47/45/8d47453d4674f0ff681db1c3f7c4f2af.jpg",
    descrip:
      "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
    Rs: "9.99",
  },
];
export const Details = ({ pass }) => {
  const classes = useStyles();
  let { id } = useParams();
  let shoe = shoes[id];
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={shoe.img}
            title={shoe.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {shoe.name}
            </Typography>
            <Typography>{shoe.Rs}</Typography>
            <Typography variant="body" style={{ font: "Bold" }}>
              {shoe.descrip}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained" color="secondary">
            ADD TO CARD
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
