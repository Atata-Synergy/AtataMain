import React from "react";
import styled from "styled-components";
import "./dropdown/dropdown.css";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandLess";
import { ExternalLink } from "react-external-link";
import LoginDropDown from "./dropdown/loginDropdown";
import { Link } from "react-router-dom";
import { Data } from "./dropdown/CategoryData";
import mobileHeader from './MobileHeader';




class HeaderBottom extends React.Component {
  state = {
    NavItems: [
      {
        id: 0,
        icon1: <MenuIcon />,
        icon2: <ExpandLessIcon />,
        title: "All Categories",
        link: "",
      },
      {
        id: 1,
        title: "Top Selling",
        link: "/topcategories",
      },
      {
        id: 2,
        title: "Blog",
        target: "_blank",
        href: "http://blog.atata57.com/",
      },
      {
        id: 3,
        title: "Services",
      },
    ],
    AllCatMenuItems: [
      {
        id: 0,
        link: "/categories",
        cate1: "Agriculture",
        cate2: "Food and Beverages",
        menu: Data.Agriculture,
      },
      {
        id: 1,
        link: "/categories",
        cate1: "Consumer Electonics",
        cate2: "Home Appliances",
        menu: Data.ConsumerElectonics,
      },
      {
        id: 2,
        link: "/categories",
        cate1: "Appreal",
        cate2: "Fashion Accessories",
        menu: Data.Appreal,
      },
      {
        id: 3,
        link: "/categories",
        cate1: "Home and Garden",
        cate2: "Furniture",
        menu: Data.HomeAndGarden,
      },
      {
        id: 4,
        link: "/categories",
        cate1: "Energy",
        cate2: "Enviroment",
        menu: Data.Energy,
      },
      {
        id: 5,
        link: "/categories",
        cate1: "Machinery",
        cate2: "Vehicles and Accessories",
        menu: Data.Machinery,
      },
      {
        id: 6,
        link: "/categories",
        cate1: "Business Services",
        cate2: "Service Equipment",
        menu: Data.BusinessServices,
      },
      {
        id: 7,
        link: "/categories",
        cate1: "Sports and Entertainment",
        cate2: "Toys and Hobbies",
        menu: Data.SportsAndEntertainment,
      },
      {
        id: 8,
        link: "/categories",
        cate1: "Packaging and Printing",
        cate2: "Office and School Supplies",
        menu: Data.PackagingandPrinting,
      },
      {
        id: 9,
        link: "/categories",
        cate1: "Beauty and Personal Care",
        cate2: "Health and Medical",
        menu: Data.BeautyAndPersonalCare,
      },
      {
        id: 10,
        link: "/categories",
        cate1: "Luggage, Bags and Cases",
        cate2: "Shoes and Accessories",
        menu: Data.Luggage,
      },
      {
        id: 11,
        link: "/categories",
        cate1: "Minerals and Metallurgy ",
        cate2: "Rubber and Plastics",
        menu: Data.Minerals,
      },
    ],
  };
  render() {
    //function for hover on All Categories
    function Onhover(e) {
      const Hover = document.getElementById("allCate-SubMenu");
      const TurnIcon = document.getElementById("IconUp");
      Hover.classList.remove("hidden");
      TurnIcon.classList.add("ChangeIcon");
    }

    function OnLeave(e) {
      const Hover = document.getElementById("allCate-SubMenu");
      const TurnIcon = document.getElementById("IconUp");
      Hover.classList.add("hidden");
      TurnIcon.classList.remove("ChangeIcon");
    }

    // function for hover on login Icon
    function handleOnhover(e) {
      const Hover = document.getElementById("LoginDrop");
      Hover.classList.remove("hidden");
    }
    function handleMouseOut(e) {
      const Hover = document.getElementById("LoginDrop");
      Hover.classList.add("hidden");
    }

    return (
      <>
        <Container>
          <div className="rightMenu">
            <ul>
              {this.state.NavItems.map((navs) => (
                <li onMouseEnter={navs.id == 0 ? Onhover : " "}>
                  <Link to={navs.link}>
                    <ExternalLink href={navs.href}>
                      <span> {navs.icon1} </span>
                      {navs.title}
                      <span id="IconUp">{navs.icon2} </span>
                    </ExternalLink>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <ul className="mobileheader">
            <div className="menu-icon">
              <MenuIcon />
            </div>
          </ul>

          <div className="leftMenu">
            <form>
              <input type="search" />
              <i class="fa fa-search"></i>
            </form>

            <div className="login">
              <i class="fas fa-user-circle" onMouseOver ={handleOnhover}></i>
            </div>
          </div>
        </Container>

        <div className="drop-down">
          {/* DropDown for All Categories */}
          <div
            className="allCate-SubMenu hidden"
            onMouseLeave={OnLeave}
            id="allCate-SubMenu"
          >
            {this.state.AllCatMenuItems.map((items) => (
              <>
                <Link to={items.link} key={items.id}>
                  <p>
                    {items.cate1} / {items.cate2}
                  </p>
                </Link>
                {this.state.AllCatMenuItems.reduce((items, key) => (
                  <div className="sub-menu hidden" id="SubMenuList">
                    {items.menu}
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>

        {/* Login DropDown Starts */}
        <div
          className=" LoginDrop hidden"
          id="LoginDrop"
          onMouseLeave={handleMouseOut}
        >
          <p>
            <LoginDropDown />
          </p>
        </div>
      </>
    );
  }
}

const Container = styled.div`
  width: 100%;
  background-color: var(--colorGreen);
  display: flex;
  justify-content: space-between;
  color: var(--colorLight);
  font-weight: 500;
  overflow: hidden;

  .rightMenu,
  .leftMenu {
    width: 50%;
    margin: 5px;
    margin-left: 2%;
    ul {
      display: flex;
      list-style-type: none;
      margin: 5px;
      li {
        padding: 10px 15px;
        a {
          color: var(--colorWhite);
          text-decoration: none;
        }
      }
      li:hover {
        background-color: var(--colorLightTransparent);
        color: var(--colorLight);
        transition: ease 0.7s;
        border-radius: 5px;
      }
    }
  }
  .focus {
    background-color: var(--colorLightTransparent);
    color: var(--colorLight);
    border-radius: 5px;
  }
  .ChangeIcon {
    transform: rotate(180deg);
    transition: 0.4s;
  }

  .leftMenu {
    display: flex;
    form {
      position: relative;
      top: 50%;
      left: 60%;
      transform: translate(-50%, -50%);
      background: var(--colorLightTransparent);
      width: 300px;
      height: 40px;
      box-sizing: border-box;
      border-radius: 5px;
      border: 0px solid white;
      padding: 5px;
    }

    input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 39px;
      background: var(--colorLightTransparent);
      line-height: 30px;
      outline: 0;
      color: var(--colorLight);
      border: 0;
      display: none;
      font-size: 1em;
      border-radius: 5px;
      padding: 0 20px;
    }

    .fa {
      box-sizing: border-box;
      padding: 10px;
      width: 42.5px;
      height: 42.5px;
      position: absolute;
      top: 0;
      right: 0;
      border-radius: 50%;
      color: var(--colorLight);
      text-align: center;
      font-size: 1.2em;
      transition: all 1s;
    }

    form:hover {
      width: 300px;
      cursor: pointer;
    }

    form:hover input {
      display: block;
    }

    .login {
      position: relative;
      top: 50%;
      left: 45%;
      transform: translate(-50%, -50%);
      width: 50px;
      height: 40px;
      box-sizing: border-box;
      border-radius: 5px;
      border: 0px solid white;
      padding: 2px 5px 5px 5px;
      i {
        font-size: 35px;
      }
    }
    .LoginDropDown {
      width: 50%;
    }
  }
  .mobileheader {
    display: none;
  }
  @media screen and (max-width: 1080px) {
    .rightMenu {
      display: none;
    }
    .leftMenu {
      display: none;
    }
    .mobileheader {
      display: block;
      padding: 10px;
      .menu-icon {
        margin-bottom: -10px;
      }
    }
  }
`;

export default HeaderBottom;
