import React, { useState } from "react";
import { Zoom } from "react-slideshow-image";
import "../App.css";
import "react-slideshow-image/dist/styles.css";
import img1 from "./images/bilal.jpg";
import img2 from "./images/img2.jpeg";
import img3 from "./images/img3.jpeg";
import img4 from "./images/img4.jpeg";
import img5 from "./images/backImg.jpg";
import img6 from "./images/img5.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Zooms from "@material-ui/core/Zoom";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    textAlign: "center",
    flex: "0 0 300px",
  },
  media: {
    height: 140,
  },
  container: {
    display: "flex",
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
};
const images = [img1, img2, img3, img4, img5, img6];
export const Home = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div>
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {images.map((each, index) => (
            <img
              key={index}
              style={{ width: "100%", height: "85vh" }}
              src={each}
              alt={index}
            />
          ))}
        </Zoom>
      </div>
      <div className="cardGender">
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                MEN
              </Typography>
            </CardContent>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              title="Contemplative Reptile"
            />
          </CardActionArea>
        </Card>
        {/* 2nd */}
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                WOMEN
              </Typography>
            </CardContent>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/137603/pexels-photo-137603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              title="Contemplative Reptile"
            />
          </CardActionArea>
        </Card>
        {/* 3rd */}
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                KIDS
              </Typography>
            </CardContent>
            <CardMedia
              className={classes.media}
              image="https://images-na.ssl-images-amazon.com/images/I/51Tcg8zZPNL._AC_UX395_.jpg"
              title="Contemplative Reptile"
            />
          </CardActionArea>
        </Card>
      </div>
      <br />
      <div>
        <h2>LATEST COLLECTION</h2>
        <hr></hr>
        <div className={classes.root}>
          <FormControlLabel
            control={<Switch checked={checked} onChange={handleChange} />}
            label="Show"
          />
          <div className={classes.container}>
            <Zooms in={checked}>
              <Paper elevation={4} className={classes.paper}>
                <svg className={classes.svg}>
                  <polygon
                    points="0,100 50,00, 100,100"
                    className={classes.polygon}
                  />
                </svg>
              </Paper>
            </Zooms>
            <Zooms
              in={checked}
              style={{ transitionDelay: checked ? "500ms" : "0ms" }}
            >
              <Paper elevation={4} className={classes.paper}>
                <svg className={classes.svg}>
                  <polygon
                    points="0,100 50,00, 100,100"
                    className={classes.polygon}
                  />
                </svg>
              </Paper>
            </Zooms>
          </div>
        </div>
      </div>
    </div>
  );
};
