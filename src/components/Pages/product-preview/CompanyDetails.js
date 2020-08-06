import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import ReviewPreview from './CompanyDetails/ReviewPreview'
import Review from './CompanyDetails/comment'

//Images
import Img from "./Images/companyDetailsImage/1.png";
import Img2 from "./Images/companyDetailsImage/2.png";
import Img3 from "./Images/companyDetailsImage/3.png";
import Img4 from "./Images/companyDetailsImage/4.png";
import Img5 from "./Images/companyDetailsImage/5.png";
import Vid1 from "./Images/companyDetailsImage/v1.mp4";

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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
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
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    margin: "auto",
    marginTop: 20,
    marginBottom: 20,
    width: "80%",
    height: 500,
    fontWeight: "bold",
    fontFamily: '"Quicksand", sans-serif',
     
    
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  panel: {
    height: 460,
    width: "105%",
    overflow: "scroll",
    overflowX: "hidden",
  },
  headTag: {
    padding: 10,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  bodyTag: {
    width: "100%",
    margin: "auto",
  },
  td: {
    fontSize: 13,
    width: "18%",
    padding: 5,
  },
  Imgslide: {
    display: "flex",
    width: 800,
    overflow: "hidden",
    margin: "auto",
  },
  ImgContainer: {
    width: 120,
    height: 120,
    overflow: "hidden",
    padding: 5,
    "& img": {
      width: 120,
      height: 120,
    },
    "& video": {
      width: 120,
      height: 120,
    },
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
          <Tab className="label" label="Company Details" {...a11yProps(0)} />
          <Tab className="label" label="Reviews" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div className={classes.panel}>
            <div className={classes.headTag}>Company video and photos</div>
            <div className={classes.bodyTag}>
              <div className={classes.Imgslide}>
                <div className={classes.ImgContainer}>
                  <img src={Img} />
                </div>
                <div className={classes.ImgContainer}>
                  <img src={Img2} />
                </div>
                <div className={classes.ImgContainer}>
                  <img src={Img3} />
                </div>
                <div className={classes.ImgContainer}>
                  <video src={Vid1} />
                </div>
                <div className={classes.ImgContainer}>
                  <img src={Img4} />
                </div>
                <div className={classes.ImgContainer}>
                  <img src={Img5} />
                </div>
              </div>
            </div>
            <div className={classes.headTag}>About Company</div>
            <div className={classes.bodyTag}>
              <table>
                <tr>
                  <td className={classes.td}>Business Type:</td>
                  <td className={classes.td}>Manufacturer, Trading Company</td>
                  <td className={classes.td}>Country / Region:</td>
                  <td className={classes.td}>Ghana</td>
                </tr>
                <tr>
                  <td className={classes.td}>Main Products:</td>
                  <td className={classes.td}>
                    T-shirt, Vest, Yoga Suit, Coat, Sportswear
                  </td>
                  <td className={classes.td}>Total Employees:</td>
                  <td className={classes.td}>51 - 100 People</td>
                </tr>
                <tr>
                  <td className={classes.td}>Total Annual Revenue:</td>
                  <td className={classes.td}>Above US$100 Million</td>
                  <td className={classes.td}>Year Established:</td>
                  <td className={classes.td}>2012</td>
                </tr>
                <tr>
                  <td className={classes.td}>Certifications:</td>
                  <td className={classes.td}> - </td>
                  <td className={classes.td}>Product Certifications:</td>
                  <td className={classes.td}> - </td>
                </tr>
                <tr>
                  <td className={classes.td}>Patents:</td>
                  <td className={classes.td}> - </td>
                  <td className={classes.td}>Trademarks(1):</td>
                  <td className={classes.td}> oshobee </td>
                </tr>
                <tr>
                  <td className={classes.td}>Main Markets:</td>
                  <td className={classes.td}>
                    {" "}
                    North America 27.00% Western Europe 22.00% Northern Europe
                    12.00%{" "}
                  </td>
                </tr>
              </table>
            </div>
            <div className={classes.headTag}>PRODUCT CAPACITY</div>
            <table>
              <tr>
                <td className={classes.td}>Factory Size:</td>
                <td className={classes.td}>1,000-3,000 square meters</td>
              </tr>
              <tr>
                <td className={classes.td}>Factory Country/Region:</td>
                <td className={classes.td}>
                  Xiaxiaokeng Industrial Area, Liangying Town, Chaonan District,
                  Shantou City, Guangdong Province,China
                </td>
              </tr>
              <tr>
                <td className={classes.td}>No. of Production Lines:</td>
                <td className={classes.td}>10</td>
              </tr>
              <tr>
                <td className={classes.td}>Contract Manufacturing:</td>
                <td className={classes.td}>
                  OEM Service OfferedDesign Service OfferedBuyer Label Offered
                </td>
              </tr>
              <tr>
                <td className={classes.td}>Annual Output Value:</td>
                <td className={classes.td}>Above US$100 Million</td>
              </tr>
            </table>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="root">
            <Grid item xs={8}>
             <ReviewPreview />
            </Grid>
            <Grid item xs={4}>
              <Review />
            </Grid>
          </div>
        </TabPanel>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin: auto;
  background-color: var(--colorAsh);
  .label {
    font-weight: 700;
    padding: 30px;
    font-family: "Quicksand", sans-serif;
    width: 100%;
  }
  .form-group {
    width: 100%;
    margin: auto;
    input {
      width: 100%;
    }
  }
  .root{
      display: flex;
  }
`;
