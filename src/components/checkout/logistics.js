import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
import ChooseLogistics from './Logistics/ChooseLogistics'
import ProductDetails from './Logistics/ProductDetails'
import DeliveryDetails from './Logistics/deliveryDetails'
import styled from 'styled-components'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        // <Box p={3}>
          <Typography>{children}</Typography>
        // </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
      paddingTop: 60,
      paddingBottom: 60,
      width: 270,
    '& .Mui-selected': {
        backgroundColor: 'var(--colorGreen) !important',
        borderRight: 'none !important',
        color: "var(--colorLight)",
    },
    '& .PrivateTabIndicator-colorSecondary-17': {
        backgroundColor: 'var(--colorGreen)',
    }
  },
  
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Container>
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Choose Logistics" {...a11yProps(0)} />
        <Tab label="Product Details" {...a11yProps(1)} />
        <Tab label="Delivery Details" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ChooseLogistics />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProductDetails />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DeliveryDetails />
      </TabPanel>
    </div>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  padding: 20px;
  margin: 5px auto;
  box-shadow: 2px 2px 10px var(--colorAsh);
  border-radius: 18px;
  font-family: "Muli", sans-serif !important;
  `
