import React, { Component } from "react";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import styled from "styled-components";

export default class UserReg extends Component {
  constructor(props) {
    super(props);
    this.state = { country: "", region: "" };
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }
  render() {
    const { country, region } = this.state;
    return (
      <>
        <Register>
          <div className="UserProfile">
          <h3>Registration Form</h3>
            <hr />
            <div className=" row">
              <div className="form-group d-flex">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Middle Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="form-group d-flex">
                <input type="email" placeholder="Email" />
                <input type="email" placeholder="Retype-email" />
                <input type="text" placeholder="Phone number" />
              </div>
              <div className="form-group d-flex">
                <i className=" fas fa-globe"></i>
                <CountryDropdown
                  value={country}
                  onChange={(val) => this.selectCountry(val)}
                />
                <RegionDropdown
                  country={country}
                  value={region}
                  onChange={(val) => this.selectRegion(val)}
                />
              </div>
              <div className="form-group address d-flex">
                <i className=" fas fa-locator"></i>
                <input type="text" placeholder="Address" />
                <input type="text" placeholder="Delivery Address" />
              </div>
            </div>
            <div className="form-group">
              <button>Proceed</button>
            </div>
          </div>
        </Register>

        <Header />
        <Footer />
      </>
    );
  }
}

const Register = styled.div`
  width: 70%;
  margin: auto;
  .UserProfile{
    margin-top:10rem;
    margin-bottom: 5rem;
  }
  hr{
    width:100%;
    margin-bottom:25px;
  }
  h3 {
    color: var(--colorAsh);
    font-size: 30px;
  }
  .form-group {
    width: 90%;
    margin: 20px auto;
    i{
      position: absolute;
      top: 402px;
      left: 250px;
      font-size: 17px;
      color:var(--colorAsh);
    }
    input {
      border: solid 0.5px var(--colorAsh);
      background-color: var(--colorLight);
      padding: 10px;
      width: 50%;
      margin: 0 5px;
      :focus{
        outline-color: var(--colorYellow);
      }
    }
    select {
      border: solid 0.5px var(--colorAsh);
      background-color: var(--colorLight);
      padding: 10px;
      padding-left: 50px;
      width: 50%;
      margin: 0 5px;
      :focus{
        outline-color: var(--colorYellow);
      }
    }
    button{
      margin-left: 80%;
      padding: 10px;
      width: 20%;
      border: none;
      background-color: var(--colorGreen);
      color: #fff;
      :hover{
        background-color: var(--colorBlack);
      }
    }
  }
`;
