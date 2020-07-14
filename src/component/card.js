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
  overall: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "2vh",
    listStyleType: "none",
    alignItems: "center",
  },
  ul: {},
});

export const Cards = () => {
  const classes = useStyles();
  const shoes = {
    "air-jordan-3-valor-blue": {
      name: "VALOUR BLUE",
      img:
        "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/828-8030-_2_360x.jpg?v=1591259697",
      Rs: "9.99",
    },
    "jordan-mars-270-london": {
      name: "JORDAN MARS 270 LONDON",
      img:
        "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/828-2030-_2_360x.jpg?v=1591259658",
      Rs: "9.99",
    },
    "air-jordan-1-zoom-racer-blue": {
      name: "RACER BLUE",
      img:
        "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/851-9266-b_360x.jpg?v=1585297785",
      Rs: "9.99",
    },
    "Men's Nike Air Max Excee Sneakers": {
      name: "RACER BLUE",
      img:
        "https://www.shoecarnival.com/dw/image/v2/BBSZ_PRD/on/demandware.static/-/Sites-scvl-master-catalog/default/dw7b241007/103543_205154_1.jpg?sw=700&sh=593&sm=fit",
      Rs: "9.99",
    },
    "Men's Running show": {
      name: "Running Shoe",
      img:
        "https://vader-prod.s3.amazonaws.com/1569592693-cloudswift-fw19-rock-slate-m-g1-1569592684.jpg",
      Rs: "9.99",
    },
    "Men's new Design": {
      name: "Running Shoe",
      img:
        "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/428-9025-_1_360x.jpg?v=1591258447",
      Rs: "9.99",
    },

    // 2nd
    slepper: {
      name: "VALOUR BLUE",
      img:
        "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/853-6214-_2_360x.jpg?v=1591878784",
      Rs: "9.99",
    },
    joging: {
      name: "JORDAN MARS 270 LONDON",
      img:
        "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/881-2175-_2_360x.jpg?v=1591879104",
      Rs: "9.99",
    },
    "racer-blue": {
      name: "RACER BLUE",
      img:
        "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/851-1251-c_360x.JPG?v=1573496007",
      Rs: "9.99",
    },
    "Men's life": {
      name: "RACER BLUE",
      img:
        "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/851-9255-b_360x.jpg?v=1574316425",
      Rs: "9.99",
    },
    design: {
      name: "Running Shoe",
      img:
        "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/859-9201-_2_360x.jpg?v=1592562290",
      Rs: "9.99",
    },
    hello: {
      name: "Running Shoe",
      img:
        "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/428-9025-_1_360x.jpg?v=1591258447",
      Rs: "9.99",
    },
  };
  return (
    <ul className={classes.overall}>
      {Object.entries(shoes).map(([ProductId, { name, img, Rs }]) => (
        <li key={ProductId}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="200"
                image={img}
                title={name}
              />
              <CardContent style={{ textAlign: "center" }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Power - Men
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Rs : {Rs}$
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                color="secondary"
                variant="contained"
                style={{ alignItems: "center" }}
              >
                Add to Card
              </Button>
            </CardActions>
          </Card>
        </li>
      ))}
    </ul>
  );
};
