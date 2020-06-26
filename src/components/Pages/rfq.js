import React from "react";
import 'react-bootstrap';
import Forms from "../Pages/rfqForm"
import { Col, Row, Button, Form, FormGroup, Label, Input, fieldset} from 'reactstrap';
import styled from "styled-components";
import Img1 from "../Image/machineTransparent.png";
import Img2 from "../Image/Computer.png";
import Img3 from "../Image/Furniture.png";
import Img4 from "../Image/gadgets.png";
import Img5 from "../Image/phones.png";
import meeting from "../Image/Team.png";
import { Container } from "semantic-ui-react";


function RFQ(props) {
  return (
    <Imagecontaner>
      <div className="d-flex mt-2 mb-2 px-2 CategoryTitle">
              <div className="CategoryName">
          <p>Request For Quotation</p>
        </div>
         <hr />
       </div>
      
      
       <div className="row imgStyle"><img src={meeting}/>
       
       <div className="style1">
       <div className="row">
       < Form>
               
               <h2><span>One Request, Multiple Quotes</span></h2>
               <br/><br/>
               
      <Row form>
        <Col md={6}>
          <FormGroup>
            
            <Input type="text" name="text" id="text" bsSize="lg" placeholder="What are you looking for" />
         
          </FormGroup>
        </Col>
        
        <Col md={6}>
          <FormGroup>
            
            <Input type="text" name="Quality" id="quality" bsSize="lg" placeholder="Quality" />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup><Input type="select" bsSize="lg">
          <option>Piece/Pieces</option> 
        <option>Cloth/Clothes</option>
        <option>Shoe/Shoes</option>
        <option>Bag/Bags</option>
      </Input>
          </FormGroup>
        </Col>
        
        <Col md={6}>
          <FormGroup><Input type="select" bsSize="lg">
          <option>Price/Prices</option> 
        <option>$10-$15</option>
        <option>$15-$20</option>
        <option>$20-$25</option>
      </Input>
          </FormGroup>
        </Col>
        

           </Row>
        <Button className="btn btn-outline">Request For Quotation</Button>
        
         </Form></div>
         </div>
      
      
      
      
      
         
      
      </div>
    </Imagecontaner>
    // <MyCateCard>
    //   <div className="d-flex mt-2 mb-2 px-2 CategoryTitle">
    //           <div className="CategoryName">
    //       <p>Request For Quotation</p>
    //     </div>
    //     <hr />
    //   </div>
    //   <div className="d-flex px-2 CategoryTitle">          
    //   <p div className="r-big-title">Marketing </p>
            
           
    //         <span className="r-big-btn">Learn More</span>
    //         <img src={meeting}/>
    //         </div>            
    // </MyCateCard>
  );
}

const Imagecontaner = styled.div`
  width: 97%;
  margin: auto;
  height: 470px;
  background-color: var(--colorLight);
  .CategoryTitle{
    .CategoryName{
      font-family: "Muli", sans-serif;
      font-weight: bold;
      font-size: 26px;
      padding: 5px;
    }
    container{
      padding:10px 20px;
      text-align:center;
      color: white;
    }
    text-block{
      position: absolute;
      bottom: 20px;
      right: 20px;
      background-color: black;
      padding: 20px 20px;
    }
      
    }
    hr{
      width: 70%;
      border: solid 5px var(--colorAsh);
    }
    .imgStyle{
      margin-left:10px;
      width:auto;
    }
    .r-big{
      width: 50%;
      height:50%;
      background-color: #85A464;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      .r-big-image{
      img{
        padding:20px;
        margin-top: 2px;
        width: 400px;
        height: 100px;
        display: flex;
        flex-direction: right;
      }
      }
      .r-big-title{
        color: var(--colorWhite);
        margin-top: 15px;
        margin-left: 30px;
        font-family: "mono-tahoma", sans-serif;
        font-size: 40px;
        width: 70%;
      }
      .r-big-btn{
margin-top: -30px;
margin-left: 20px;
background-color: var(--colorWhite);
width: 30%;
padding: 5px;
text-align: center;
font-weight: bold;
color: var(#0a590a);
border-radius: 10px;
      }
    }
  }
  }
  .style1{
    
    margin-left: 10%;
    border:10px solid #ccc;
  }
  .border {
    text-align: center;
    border: 20px solid;
    border-radius: 50px;
`;

export default RFQ;
