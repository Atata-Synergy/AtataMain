import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import NumberFormat from "react-number-format";

export const Container = styled.div``;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    marginTop: 5,
    backgroundColor: theme.palette.background.paper,
    textAlign: "center",
  },
  button1: {
    width: "85%",
    padding: 13,
    background: 'var(--colorGreen)',
    color: 'var(--colorWhite)',
   fontSize: 12,
   margin: 5,
    
  },
  button2: {
    width: "85%",
    padding: 13,
    background: 'none',
    border: 'solid 2px var(--colorGreen)',
    color: 'var(--colorGreen)',
   fontSize: 12,
   margin: 5,
    
  },
}));

export default function OrderQ() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem>
          <MOQList>
            <p>2-9 Pieces</p>
            <NumberFormat
          className={"px-1"}
          value={'1100.60'}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₦"}
        />
          </MOQList>
        </ListItem>
        <ListItem>
          <MOQList>
            <p>10-99 Pieces</p>
            <NumberFormat
          className={"px-1"}
          value={'1100.36'}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₦"}
        />
          </MOQList>
        </ListItem>
        <ListItem>
          <MOQList>
            <p>100-4999 Pieces</p>
            <NumberFormat
          className={"px-1"}
          value={'1100.04'}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₦"}
        />
          </MOQList>
        </ListItem>
        <ListItem>
          <MOQList>
            <p>{">=5000 Pieces"}</p>
            <NumberFormat
          className={"px-1"}
          value={'1000.00'}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₦"}
        />
          </MOQList>
        </ListItem>
      </List>
      <Button variant="contained" className={classes.button1}>
        Add to Cart
      </Button>
      <Button variant="contained" className={classes.button2}>
        Proceed to checkout
      </Button>
    </div>
  );
}

const MOQList = styled.div`
  border: solid 1px var(--colorAsh);
  padding: 4px;
  width: 90%;
  margin: auto;
  text-align: center;
  font-family: "Quicksand", sans-serif;
  p {
    margin-bottom: -5px;
  }
  span {
    font-weight: 700;
    font-size: 25px;
  }
`;
