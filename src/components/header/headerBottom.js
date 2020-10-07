import React, { useState } from "react";
import styled from "styled-components";
import "./headerBottom.css";
import { AllCatMenuItems } from "./AllCateData";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandLess";
import { ExternalLink } from "react-external-link";
import ItemsCarousel from "react-items-carousel";
import { Link } from "react-router-dom";
import { Data } from "./dropdown/CategoryData";

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

    function Nav() {
      const [activeItemIndex, setActiveItemIndex] = useState(0);
      const chevronWidth = 40;

      return (
        <div
          className="all-categories"
          style={{ padding: `0 ${chevronWidth}px` }}
        >
          <ul>
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={6}
              gutter={5}
              leftChevron={
                <button
                  style={{
                    border: "none",
                    outline: "none",
                    background: "none",
                    fontWeight: "700",
                    fontSize: "17px",
                    color: "var(--colorLight)",
                  }}
                >
                  {"<"}
                </button>
              }
              rightChevron={
                <button
                  style={{
                    border: "none",
                    outline: "none",
                    background: "none",
                    fontWeight: "700",
                    fontSize: "17px",
                    color: "var(--colorLight)",
                  }}
                >
                  {">"}
                </button>
              }
              outsideChevron
              chevronWidth={chevronWidth}
            >
              {/* Datas are been read from ./AllCateData.js */}
              {AllCatMenuItems.map((items) => (
                <Link to={items.link} style={{color: '#fff'}}>
                  <li>{items.cate}</li>
                </Link>
              ))}
            </ItemsCarousel>
          </ul>
        </div>
      );
    }
    return <Nav />;
  }
}
export default HeaderBottom;
