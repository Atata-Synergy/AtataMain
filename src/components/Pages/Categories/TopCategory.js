import React, { useState } from "react";
import { StickyContainer, Sticky } from "react-sticky";
import ItemsCarousel from "react-items-carousel";
import styled from "styled-components";
import Header from "../../header/header";
import Card from "../../card/smallCard";

function ListHeader() {
  function Click(e) {
    const pick = document.getElementById("list");
    pick.classList.add("active");
  }

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <List>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={5}
          gutter={20}
          leftChevron={<button>{"<"}</button>}
          rightChevron={<button>{">"}</button>}
          outsideChevron
          chevronWidth={chevronWidth}
        >
          <li id="list" className="active" onClick={Click}>
            All Categories
          </li>
          <li id="list" onClick={Click}>
            Agric
          </li>
          <li id="list" onClick={Click}>
            Arts And Culture
          </li>
          <li id="list" onClick={Click}>
            Science and Technology
          </li>
          <li id="list" onClick={Click}>
            Building and Construction
          </li>
          <li id="list" onClick={Click}>
            Pharmaceautical and Health
          </li>
          <li id="list" onClick={Click}>
            Beauty/Fashion/Cosmetics
          </li>
        </ItemsCarousel>
      </List>
    </div>
  );
}

const List = styled.div`
  padding: 10px;
  list-style-type: none;

  li {
    color: var(--colorWhite);
    width: 100%;
    padding: 9px;
    text-align: center;
    cursor: pointer;
  }

  button {
    border: none;
    padding: 9px;
    outline: none;
  }

  .active {
    background-color: var(--colorWhite);
    color: var(--colorGreen);
  }
`;

class TopCategories extends React.Component {
  render() {
    return (
      <>
        <Container>
          <StickyContainer>
            {/* Other elements can be in between `StickyContainer` and `Sticky`,
        but certain styles can break the positioning logic used. */}


            <Sticky>
              {({
                style,

                // the following are also available but unused in this example
                isSticky,
                wasSticky,
                distanceFromTop,
                distanceFromBottom,
                calculatedHeight,
              }) => (
                  <header style={style}>
                    <Head>
                      <ListHeader />
                    </Head>
                  </header>
                
              )}
            </Sticky>
            <>
              
              <div className="col-12 contains my-4">
              <div className="col-12 my-2 d-flex">
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
              <div className="col-12 my-2 d-flex">
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
              <div className="col-12 my-2 d-flex">
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
              <div className="col-12 my-2 d-flex">
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
              <div className="col-12 my-2 d-flex">
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </>
          </StickyContainer>
        </Container>
        <Header />
      </>
    );
  }
}

const Container = styled.div`
  margin-top: 10%;
  .contains{
    z-index: -2;
  }
`;

const Head = styled.div`
  background-color: var(--colorGreen);
`;
export default TopCategories;
