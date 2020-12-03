import React, { Component } from "react";
import ImagePreview from "./imageView/imagePreview";
import styled from "styled-components";
import Order from "./orderInput/OrderMain";
import OrderQuantity from "./orderInput/orderQuantity";
import Grid from "@material-ui/core/Grid";
import CompanyDetails from "./CompanyDetails";
import './productMain.css'

//Header
import Header from "../../header/header";

//Images
import Img1 from "./Images/imagesForProduct/accessories.png";
import Img2 from "./Images/imagesForProduct/appliance.png";
import Img3 from "./Images/imagesForProduct/clothe1.png";
import Img4 from "./Images/imagesForProduct/clothe2.png";
import Img5 from "./Images/imagesForProduct/clothe3.png";
import Img6 from "./Images/imagesForProduct/phones.png";

//Related Items and Items for same company Card
import Card from "./card/card";

//Fixed cart button
import FixedCartButton from "../FixedCartButton";

class App extends Component {
  render() {
    return (
      <>
      <div className='prd-contaniner'>
        <section className='prd-display'>
                <ImagePreview />
                <Order />
                {/* <OrderQuantity /> */}
          
        </section>
          <div className="col-12 col-xs-12 col-lg-12 col-md-12 col-sm-12">
            <Grid item xs={12}>
              <Title>Other Product by (Seller Name)</Title>

              <ProductView>
                <Card title="Airpods" img={Img1} amount1="200" amount2="5000" />
                <Card
                  title="Electric Blender"
                  img={Img2}
                  amount1="2000"
                  amount2="15000"
                />
                <Card title="Sweater" img={Img4} amount1="500" amount2="5000" />
                <Card
                  title="Yellow Sweater"
                  img={Img3}
                  amount1="595"
                  amount2="10000"
                />
                <Card
                  title="I phone"
                  img={Img6}
                  amount1="20000"
                  amount2="50000"
                />
                <Card
                  title="Grey Sweater"
                  img={Img5}
                  amount1="100"
                  amount2="700"
                />
              </ProductView>
            </Grid>
          </div>
          <Grid item xs={12}>
            <ProductView>
              <CompanyDetails />
            </ProductView>
          </Grid>
          <div className="col-12 col-xs-12 col-lg-12 col-md-12 col-sm-12">
            <Grid item xs={12}>
              <Title>Related Items</Title>
              <ProductView>
                <Card title="Airpods" img={Img1} amount1="200" amount2="5000" />
                <Card
                  title="Electric Blender"
                  img={Img2}
                  amount1="2000"
                  amount2="15000"
                />
                <Card title="Sweater" img={Img4} amount1="500" amount2="5000" />
                <Card
                  title="Yellow Sweater"
                  img={Img3}
                  amount1="595"
                  amount2="10000"
                />
                <Card
                  title="I phone"
                  img={Img6}
                  amount1="20000"
                  amount2="50000"
                />
                <Card
                  title="Grey Sweater"
                  img={Img5}
                  amount1="100"
                  amount2="700"
                />
              </ProductView>
            </Grid>
          </div>
      </div>
      <FixedCartButton />
      <Header />
      </>
    );
  }
}

const Container = styled.div`
  width: 100%;
`;

const ProductView = styled.div`
  display: flex;
  margin-top: 5rem;
`;

const Title = styled.div`
  margin: 15px 0 20px 10px;
  font-size: 15px;
  padding: 10px;
  font-weight: bold;
  background: var(--colorLight);
  text-transform: uppercase;
  letter-spacing: 5px;
`;

export default App;
