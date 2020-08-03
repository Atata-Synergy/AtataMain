import React, { Component } from "react";
import styled from "styled-components";
import Home from "@material-ui/icons/Payment";

import HomeWork from "@material-ui/icons/HomeWork";
import AirportShuttle from "@material-ui/icons/AirportShuttle";
import PeopleSharpIcon from "@material-ui/icons/PeopleSharp";

import { green } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import atataPay from "../Image/atataPaySmall.png";
import atataSure from "../Image/atataSureSmall.png";

class FeaturedLinks extends Component {
  render() {
    return (
      <div className="w-100">
        <Links>
          <LinksItem>
            <Link to="/atataPay">
              <div>
                <Home className="icon"></Home>
                <LinksBottom className="text-icon">Atata Pay</LinksBottom>
              </div>
            </Link>
          </LinksItem>

          <LinksItem>
            <Link to="/atataLogistics">
              <div>
                <AirportShuttle className="icon"></AirportShuttle>
                <LinksBottom className="text-icon">Atata Logistics</LinksBottom>
              </div>
            </Link>
          </LinksItem>

          <LinksItem>
            <Link to="/atataPay">
              <div>
                <HomeWork className="icon"></HomeWork>
                <LinksBottom className="text-icon">Atata Warehouse</LinksBottom>
              </div>
            </Link>
          </LinksItem>

          <LinksItem>
            <Link to="/atataInsurance">
              <div>
                <PeopleSharpIcon className="icon"></PeopleSharpIcon>
                <LinksBottom className="text-icon">
                  Atata Insurance{" "}
                </LinksBottom>
              </div>
            </Link>
          </LinksItem>
        </Links>
      </div>
    );
  }
}
const Links = styled.div`
  display: flex;
  margin: auto;
  height: 70px;
  background-color: #85A464;
  a {
    color: #85A464;
    text-decoration: none;    
    :hover{
      color:#85A464;
    }
  .icon{
    display: inline-flex;
    margin-bottom:50px;
    font-size:50px;
    margin-right:1px;
    color: var(--colorLight);
    justify-content:center;
    background-color: #FA0214;
    border-radius: 50%;
    border: 2px solid grey;
    padding: 10px;
  }
  }
  
  .text-icon{
    position: absolute;
    display: inline-flex;
    alignItems:center;
    padding-top:10px;
    padding-left:15px;
    justify-content:center;
    color:#f8f8f8;
    font-size:20px;
    font-family:Arial, sans-serif;
    
  }
  .icon2{
    font-size:40px;
    color: #032C8A;

  }
  .icon3{
    font-size:40px;
    color: var (--colorLight);

  }
  }

`;
const LinksItem = styled.div`
  width: 20%;
  
  margin: 10px;
  
  text-align: center;
  background-color: #032C8A
  :hover{
    background-color:#ccc;
    color: #85A464;
  }
`;
const LinksTop = styled.div`
  font-size: 50px;
  margin: 10% 0;
`;
const LinksBottom = styled.div`
  font-family: "Muli", sans-serif;

  padding-bottom: 40%;
  color: #036735;
  .styleBottom {
    padding-left: 20px;
  }
`;
export default FeaturedLinks;
