import React, { Component } from "react";
import ImagePreview from "./imageView/imagePreview";
import styled from "styled-components";
import Order from "./orderInput/OrderMain";
import OrderQuantity from "./orderInput/orderQuantity"
import Grid from "@material-ui/core/Grid";
import CompanyDetails from './CompanyDetails'

//Images
import Img1 from './Images/imagesForProduct/accessories.png'
import Img2 from './Images/imagesForProduct/appliance.png'
import Img3 from './Images/imagesForProduct/clothe1.png'
import Img4 from './Images/imagesForProduct/clothe2.png'
import Img5 from './Images/imagesForProduct/clothe3.png'
import Img6 from './Images/imagesForProduct/phones.png'

//Related Items and Items for same company Card
import Card from './card/card';



class App extends Component {
  render() {
    return (
      <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ProductView>
            <Grid item xs={5}>
              <ImagePreview />
            </Grid>
            <Grid item xs={4}>

            <Order />
            </Grid>
            <Grid item xs={3}>
            <OrderQuantity />
            </Grid>

          </ProductView>
        </Grid>
        <Grid item xs={12}>
            <Header>Other Product by (Seller Name)</Header>
            
          <ProductView>
            <Card title='Airpods' img={Img1} amount1='200' amount2='5000'/>
            <Card title='Electric Blender' img={Img2} amount1='2000' amount2='15000'/>
            <Card title='Sweater' img={Img4} amount1='500' amount2='5000'/>
            <Card title='Yellow Sweater' img={Img3} amount1='595' amount2='10000'/>
            <Card title='I phone' img={Img6} amount1='20000' amount2='50000'/>
            <Card title='Grey Sweater' img={Img5} amount1='100' amount2='700'/>
            
          </ProductView>
        </Grid>
        
        <Grid item xs={12}>
        <ProductView>
        <CompanyDetails />
        </ProductView>
        
        </Grid>

        <Grid item xs={12}>
            <Header>Related Items</Header>
          <ProductView>
            <Card title='Airpods' img={Img1} amount1='200' amount2='5000'/>
            <Card title='Electric Blender' img={Img2} amount1='2000' amount2='15000'/>
            <Card title='Sweater' img={Img4} amount1='500' amount2='5000'/>
            <Card title='Yellow Sweater' img={Img3} amount1='595' amount2='10000'/>
            <Card title='I phone' img={Img6} amount1='20000' amount2='50000'/>
            <Card title='Grey Sweater' img={Img5} amount1='100' amount2='700'/>
          </ProductView>
        </Grid>
        
      </Grid>
      </>
    );
  }
}

const ProductView = styled.div`
  display: flex;
`;

const Header = styled.div`
margin: 15px 0 20px 25px;
font-size: 15px;
padding: 10px;
font-weight: bold;
background: var(--colorLight);
text-transform: uppercase;
letter-spacing: 5px;
`

export default App;
