import React, { Component } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { Link } from "react-router-dom";
import img2 from "../Image/2.png";
import styled from "styled-components";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 400,
  },
  fullList: {
    width: "auto",
  },
  image: {
    width: 108,
    height: 108,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "70%",
    maxHeight: "70%",
  },

  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 700,
  },
  main: {
    display: "flex",
  },
  cartTop: {
    textAlign: "center",
    width: "100%",
    height: "40px",
    textTransform: "uppercase",
    padding: "5px",
    fontSize: "25px",
    color: "var(--colorWhite)",
    backgroundColor: "var(--colorGreen)",
    "& .MuiSvgIcon-root": {
      fontSize: "17px",
    },
  },
}));
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 5,
    padding: "0 4px",
  },
}))(Badge);

function FixedCartButton() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className={classes.cartTop}>
        <p> Cart </p>
      </div>

      <SuperDiv>
        <div className="Item">
          <div className="imgContainer">
            <img src={img2} />
          </div>
          <div className="Details">
            <div className="detailsTop"> Made in China Shoe</div>
            <div className="detailsBottom">
              <p>Qty: x2</p>
              <p>$200</p>
            </div>
          </div>
        </div>

        <div className="Item">
          <div className="imgContainer">
            <img src={img2} />
          </div>
          <div className="Details">
            <div className="detailsTop">
              {" "}
              1080P Wifi 2.0Inch Screen Sport DV Ultra Video Camera
            </div>
            <div className="detailsBottom">
              <p>Qty: x2</p>
              <p>$200</p>
            </div>
          </div>
        </div>
        <div className="Item">
          <div className="imgContainer">
            <img src={img2} />
          </div>
          <div className="Details">
            <div className="detailsTop">
              {" "}
              1080P Wifi 2.0Inch Screen Sport DV Ultra Video Camera
            </div>
            <div className="detailsBottom">
              <p>Qty: x2</p>
              <p>$200</p>
            </div>
          </div>
        </div>
        <div className="Item">
          <div className="imgContainer">
            <img src={img2} />
          </div>
          <div className="Details">
            <div className="detailsTop">
              {" "}
              1080P Wifi 2.0Inch Screen Sport DV Ultra Video Camera
            </div>
            <div className="detailsBottom">
              <p>Qty: x2</p>
              <p>$200</p>
            </div>
          </div>
        </div>
      </SuperDiv>

      <Bottom>
        <div className="totalAmount">
          <p>
            Total Amount = <span>$400.00</span>
          </p>
        </div>
        <div className="Checkout">
          <Link to="/">
            <CheckCircleOutlineIcon /> Proceed to Checkout
          </Link>
        </div>
      </Bottom>
    </div>
  );

  return (
    <MyBtn>
      <div>
        {["right"].map((anchor) => (
          <React.Fragment>
            <div className="outerBtn">
              <p onClick={toggleDrawer(anchor, true)} className="outerBtn-Item">
                <StyledBadge badgeContent={2} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </p>
            </div>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </MyBtn>
  );
}

const Bottom = styled.div`
  postion: fixed;
  background-color: "var(--colorGreen)";
  margin-bottom: 0;
  bottom: 0;
  width: 100%;
  height: 10px;
  text-align: center;

  .totalAmount {
    padding: 5px;
    background-color: var(--colorLight);
  }
  .Checkout {
    background-color: var(--colorGreen);
    color: var(--colorWhite);
    padding: 5px;
    a{
      color: var(--colorWhite);
    }
  }
`;

const SuperDiv = styled.div`
  padding: 5px;
  margin: 10px 0px;
  height: 57%;
  overflow: hidden;
  overflow-y: scroll;
  .Item {
    display: flex;
    margin: 5px 0px;
    padding: 7px;
    border-radius: 5px;
    background-color: var(--colorLight);
  }
  .imgContainer {
    width: 100px;
    height: 100px;
    overflow: hidden;
  }
  img {
    margin-left: -15px;
    width: 120px;
    height: 100px;
  }
  .Details {
    width: 85%;
    margin: 0px 8px;
    background-color: var(--colorWhite);
    .detailsTop {
      text-align: center;
      height: 61px;
      overflow: hidden;
      font-size: 14px;
      font-weight: bold;
      padding: 10px;
    }

    .detailsBottom {
      display: flex;
      p {
        width: 50%;
        padding: 5px auto;
        text-align: center;
      }
    }
  }
`;

const MyBtn = styled.div`
  .outerBtn {
    height: 50px;
    color: white;
    width: 90px;
    placement: leftTop;
    float: left;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    cursor: pointer;
    position: fixed;
    right: 0px;
    top: 60%;
    margin-top: 50px;
    z-index: 99;
    padding: 0px;
    border-radius: 6px 0px 0px 6px;
  }
  .outerBtn-Item {
    background-color: var(--colorGreen);
    border-radius: 50px;
    text-align: center;
    padding: 10px;
  }
  .iconBtn {
    font-family: Lato, sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: var(--colorGreen);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 15px 10px;
  }
  .innerBtn {
    width: auto;
    height: 35px;
    min-width: 80px;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background-color: rgb(255, 255, 255);
    font-family: Lato, sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: rgb(0, 158, 127);
    overflow: hidden;
    border-radius: 6px;
    margin: 0px 10px 10px;
  }
  .checkoutBtn {
    height: 48px;
    width: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    background-color: #ccccc;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
    cursor: pointer;
    margin-bottom: 15px;
    margin-left: 15px;
    padding: 0px;
    border-radius: 48px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    outline: 0px;
    font-family: Lato, sans-serif;
    margin: 0px;
  }
`;
export default FixedCartButton;
