import React from "react";
import styled from "styled-components";
import Img1 from "../Image/generalHome.jpg";
import Img2 from "../Image/television.jpg";
import Img3 from "../Image/soundSystem.jpg";
import Img4 from "../Image/kitchen.jpg";
import Img5 from "../Image/projector.jpg";
import Img6 from "../Image/camera.jpg";


function Card(props) {
  return (
    <ItemCard>
      <div className="Imagecontainer">
        <img src={props.img} />
      </div>
      <div className="Details">
        <p className="title">{props.title}</p>
        <p>MOQ from: {props.MOQRange}</p>
      </div>
    </ItemCard>
  );
}

const ItemCard = styled.div`
  display: flex;
  background-color: var(--colorWhite);
  border-radius: 5px;
  width: 450px;
  height: 200px;
  overflow: hidden;
  margin: 5px;
  .Imagecontainer {
    width: 40%;
    height: 90%;
    overflow: hidden;
    img {
      margin-top:30px;
      width: 100%;
    }
  }

  .Details {
    width: 60%;
    margin: 50px 10px;
    .title {
      font-size: 25px;
      font-weight: bold;
      color:black;
    }
    p{
      font-size: 17px;
      color: var(--colorDark);
    }
  }
`;

function CategoryCard(props) {
  return (
    <MyCateCard>
      <div className="CategoryName">
        <p>Recommended Electronics for you</p>
      </div>
      <div className="FeaturedItems">
        <Card img={Img2} title='TV sets' MOQRange="20pcs - 100pcs"/>
        <Card img={Img3} title='Sound System' MOQRange="20pcs - 100pcs"/>
        <Card img={Img1} title='General Home Electonics' MOQRange="20pcs - 100pcs"/>
      </div>
      <div className="FeaturedItems">
        <Card img={Img4} title='Kitchen Electronics' MOQRange="20pcs - 100pcs"/>
        <Card img={Img5} title='Projectors' MOQRange="20pcs - 100pcs"/>
        <Card img={Img6} title='Camera' MOQRange="20pcs - 100pcs"/>
      </div>
    </MyCateCard>
  );
}

const MyCateCard = styled.div`
  width: 100%;
  background-color: var(--colorLight);
  margin: 20px 0px;
  padding: 10px;
  .CategoryName {
    font-size: 20px;
    font-weight: bold;
  }
  .FeaturedItems{
    display: flex;
  }
`;

export default CategoryCard;
