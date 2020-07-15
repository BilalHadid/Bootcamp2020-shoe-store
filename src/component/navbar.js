import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Badge from "@material-ui/core/Badge";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/LocalMall";
import NotificationsIcon from "@material-ui/icons/Storefront";
import MoreIcon from "@material-ui/icons/MoreVert";
import HomeIcon from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Routes, Route, useNavigate } from "react-router";
import { Cards } from "./card";
import { Home } from "./Home";
import SignInSide from "./SignIn";
import { Details } from "./details";
import { Cart } from "./Cart";
import ContactsIcon from "@material-ui/icons/Contacts";
import { Contact } from "./Contact";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
    color: "white",
  },
  Mobilebutton: {
    margin: theme.spacing(1),
    color: "#494949",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={() => Navigate("/signin")}>Sign In</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button
          variant="text"
          color="primary"
          className={classes.Mobilebutton}
          startIcon={<HomeIcon />}
          onClick={() => Navigate("/")}
        >
          Home
        </Button>
      </MenuItem>

      <MenuItem>
        <Button
          variant="text"
          color="primary"
          className={classes.Mobilebutton}
          badgeContent={0}
          startIcon={<NotificationsIcon />}
          onClick={() => Navigate("/products")}
        >
          Products
        </Button>
        {/* 3rd */}
        <MenuItem>
          <Button
            variant="text"
            color="primary"
            className={classes.Mobilebutton}
            startIcon={<MailIcon />}
            onClick={() => Navigate("/contact")}
          >
            Contact
          </Button>
        </MenuItem>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  function NotFound() {
    return <div>Not Found</div>;
  }
  const Navigate = useNavigate();
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: "#2E322E" }}>
          <Typography className={classes.title} variant="button" noWrap>
            Shoe Store
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button
              variant="text"
              color="primary"
              className={classes.button}
              startIcon={<HomeIcon />}
              onClick={() => Navigate("/")}
            >
              Home
            </Button>

            <Button
              variant="text"
              color="primary"
              className={classes.button}
              startIcon={<NotificationsIcon />}
              onClick={() => Navigate("/products")}
            >
              Products
            </Button>
            <Button
              variant="text"
              color="primary"
              className={classes.button}
              startIcon={<ContactsIcon />}
              onClick={() => Navigate("/contact")}
            >
              Contact
            </Button>
            <IconButton
              color="inherit"
              aria-label="cart"
              onClick={() => Navigate("/cart")}
            >
              <Badge color="secondary" badgeContent={2}>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              badgeContent={4}
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Badge badgeContent={0}>
                <AccountCircle />
              </Badge>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Cards />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signin" element={<SignInSide />} />
      </Routes>
    </div>
  );
}
