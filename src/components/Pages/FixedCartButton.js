import React, { Component } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import img2 from "../Image/2.png";

import styled from 'styled-components'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 700,
  },
  fullList: {
    width: 'auto',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 700,
    },
}));

function FixedCartButton() {
  const classes = useStyles();
  const [state, setState] = React.useState({
        right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          {['My Products'].map((text, index) => (
          <ListItem key={text}>
            <ListItemIcon>{index % 2 === 0 ? <AddShoppingCartIcon /> : <AddShoppingCartIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      
      <List>
        {['Total'].map((text, index) => (
          <ListItem key={text}>

    <div className={classes.root}>
      <div>
        <Grid container spacing={1}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={img2} />
            </ButtonBase>
          </Grid>
          

             {/*//My counter goes in here
             <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={img2} />
            </ButtonBase>
             </Grid>*/}

          <Grid item xs-6 lg-3 sm container>
            <Grid item xs container direction="column" spacing={1}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Product Description
                </Typography>

                
                <Typography variant="body2" gutterBottom>
                Men's Casual PU Leather Shoes Business Dress Shoes-brown
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
                </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">Quantity</Typography>

              
            
            </Grid>

            <Grid item>
              <Typography gutterBottom variant="subtitle1"></Typography>

              
            
            </Grid>

            <Grid item>
             
            </Grid>
            </Grid>
            <Grid item >
                <Typography gutterBottom variant="subtitle1">
                 Amount
                </Typography>
                </Grid>
                
                   </Grid>

          
        
        </div>
        <Divider style={{width:'100%'}} />
    </div>
 
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <List style={{marginTop:'50%'}}>
      {['Checkout'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <CheckCircleOutlineIcon /> : <CheckCircleOutlineIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

    </div>
  );

  return (
      <MyBtn>
    <div>
      {['right'].map((anchor) => (
        <React.Fragment>
          <div className="outerBtn">
          <Button onClick={toggleDrawer(anchor, true)}>
          <p className="outerBtn">0 Item<p></p>
           <span className="innerBtn"> $ 0.00
 
 </span>
 </p>
          </Button>
          </div>
          <Drawer anchor={anchor} open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
    </MyBtn>
  );
}


//export class FixedCartButton extends Component {
 
  //  render() {
    //    return (

    
               
      {/*      <div>
    
        <Button className="outerBtn">0 Item
        <span className="innerBtn"> $ 0.00
 
 </span>
     </Button>
     
     </div> 
      
 
 
           </MyBtn>
        )
    }
}*/}

const MyBtn = styled.div`
.outerBtn{
    
    height: 100px;
    color: white;
    width: 100px;
    placement:leftTop;
    display: flex;
    float:left;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background-color: rgb(0, 158, 127);
    cursor: pointer;
    border: 2px solid white;
    position: fixed;
    right: 0px;
    top: 60%;
    margin-top: 50px;
    z-index: 99;
    padding: 0px;
    border-radius: 6px 0px 0px 6px;
}
.iconBtn{
    font-family: Lato, sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 15px 10px;
}
.innerBtn{
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
.checkoutBtn{
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
