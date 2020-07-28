import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { FormButton } from "semantic-ui-react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& .MuiPaper-elevation4": {
      boxShadow: "none !important",
    },
    "& .MuiAppBar-colorPrimary": {
      backgroundColor: "var(--colorRed)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--colorLight)",
    },
    "& .MuiButton-label": {
      color: "var(--colorLight)",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.25),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.35),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
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
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "35ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const preventDefault = (event) => event.preventDefault();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/*  */}
          <Button
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            All Categories
            <MenuIcon />
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleClose}>My account</MenuItem>
                      <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>

          {/*  */}

          <Typography className={classes.title} variant="h6" noWrap>
            <Menu>
              <Link to="/Login" className="menuList">
                Top Selling
              </Link>
              <Link href="/" className="menuList">
                Blog
              </Link>
              <Link href="/" className="menuList">
                About Us
              </Link>
              <Link href="/" className="menuList">
                Services
              </Link>
            </Menu>
          </Typography>
          <Form>

          <div className="Login">
            <AccountCircleIcon />Login / Sign up
          </div>
          </Form>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

const Menu = styled.div`
  display: flex;

  .menuList {
    font-size: 16px;
    font-family: "Open Sans", sans-serif;
    font-weight: 500;
    padding: 5px 15px;
    color: var(--colorLight);

    a {
      text-decoration: none;
    }
  }
`;

const Form = styled.div`

.Login{
  .MuiSvgIcon-root{
    font-size: 40px;
    padding: 0px 5px;
  }
}
`;
