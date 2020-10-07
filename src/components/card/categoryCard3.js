import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Img1 from "../Image/cassavaa.jpg";
import Img2 from "../Image/waterMelon.jpg";
import Img3 from "../Image/rawmaterial.jpg";
import Img4 from "../Image/fertilizers.jpg";
import Img5 from "../Image/picfeeds.jpg";

function Card(props) {
  return (
    <Link to="/">
      <ItemCard>
        <div className="Imagecontainer">
          <img src={props.img} />
        </div>
        <div className="Details">
          <p className="title">{props.title}</p>
          <p>MOQ from: {props.MOQRange}</p>
        </div>
      </ItemCard>
    </Link>
  );
}

const ItemCard = styled.div`
  display: flex;
  background-color: var(--colorWhite);
  border-radius: 5px;
  width: 350px;
  height: 200px;
  overflow: hidden;
  margin: 10px;
  .Imagecontainer {
    width: 40%;
    height: 90%;
    overflow: hidden;
    img {
      margin-top: 30px;
      width: 100%;
    }
  }

  .Details {
    width: 60%;
    margin: 50px 10px;
    color: black;

    .title {
      font-size: 20px;
      font-weight: bold;
    }
    p {
      font-size: 15px;
      color: var(--colorDark);
    }
  }
`;

function CategoryCard(props) {
  return (
    <MyCateCard>
      <div className="CategoryName">
        <p>Recommended Agric for you</p>
      </div>
      <div className="FeaturedItems">
        <Card
          img={Img1}
          title="Seedligs, stems and tubers"
          MOQRange="20pcs - 100pcs"
        />
        <Card
          img={Img2}
          title="Fruits and Vegetables"
          MOQRange="20pcs - 100pcs"
        />
        <Card img={Img3} title="Raw materials" MOQRange="20pcs - 100pcs" />
      </div>
      <div className="FeaturedItems">
        <Card img={Img5} title="Feeds and Vaccines" MOQRange="20pcs - 100pcs" />
        <Card
          img={Img4}
          title="Fertilizers and chemicals"
          MOQRange="20pcs - 100pcs"
        />
        <Card
          img={Img5}
          title="Other Agric products"
          MOQRange="20pcs - 100pcs"
        />
      </div>
    </MyCateCard>
  );
}

const MyCateCard = styled.div`
  width: 90%;
  background-color: var(--colorLight);
  margin: 20px auto;
  padding: 5px;
  .CategoryName {
    font-size: 20px;
    font-weight: bold;
  }
  .FeaturedItems {
    display: flex;
    flex-wrap: wrap;
  justify-content: center;
  }
`;

export default CategoryCard;
