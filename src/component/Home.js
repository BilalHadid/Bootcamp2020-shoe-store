import React from "react";
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
import { useNavigate } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { IconButton } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PinterestIcon from "@material-ui/icons/Pinterest";
import YouTubeIcon from "@material-ui/icons/YouTube";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    textAlign: "center",
    flex: "0 0 300px",
  },
  media: {
    height: 180,
  },
  container: {
    display: "flex",
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {},
  polygon: {
    width: "100%",
    height: "30vh",
  },
  foot: {
    backgroundColor: "#565C68",
  },
  bottom: {
    backgroundColor: "#161B27",
    color: "white",
    padding: "2vh",
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
  const Navigate = useNavigate();
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
          <CardActionArea onClick={() => Navigate("/products")}>
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
          <CardActionArea onClick={() => Navigate("/products")}>
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
          <CardActionArea onClick={() => Navigate("/products")}>
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
      <footer className={classes.foot}>
        <IconButton color="inherit" aria-label="add to shopping cart">
          <FacebookIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="add an alarm">
          <InstagramIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="add to shopping cart">
          <TwitterIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="add to shopping cart">
          <LinkedInIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="add an alarm">
          <PinterestIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="add to shopping cart">
          <YouTubeIcon />
        </IconButton>
        <div className={classes.bottom}>
          <Typography>
            Made by Bilal Hadid Link: bootcamp2020-shoe-store.surge.sh
          </Typography>
        </div>

        {/* <Typography variant="h6" marked="left" gutterBottom>
          Legal
        </Typography>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <Link href="/premium-themes/onepirate/terms/">Terms</Link>
          </li>
          <li className={classes.listItem}>
            <Link href="/premium-themes/onepirate/privacy/">Privacy</Link>
          </li>
        </ul>
        <Typography variant="h6" marked="left" gutterBottom>
          Language
        </Typography>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your Language"
          variant="outlined"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField> */}
      </footer>
    </div>
  );
};
