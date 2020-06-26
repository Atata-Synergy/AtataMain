import React from 'react';
import ReactDOM from "react-dom";
import styled from "styled-components";

import { Col, Row, Button, Form, FormGroup, Label, Input, fieldset} from 'reactstrap';



function Forms(props) {
  return (
    <form>
<div className="style2">
    <div className="RFQ">
       
      
        < Form>
               <div className="style1" >
               <h2><span>One Request, Multiple Quotes</span></h2>
      <Row form>
        <Col md={6}>
          <FormGroup>
            
            <Input type="text" name="text" id="text" placeholder="What are you looking for" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            
            <Input type="text" name="Quality" id="quality" placeholder="Quality" />
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
        
        {/*<Col md={2}>
          
  </Col>*/}
      </Row>
        <Button>Request For Quotation</Button>
        </div>
         </Form>
            </div>
            </div>
            </form>
  );
}

const form = styled.div`
fieldset {
  text-align: center;
  border: 20px solid;
  border-radius: 50px;
  border-color:#000;
}

.style1 {
  width:60%;
	padding-top:10px;
	border:1px solid #666;
	border-radius:8px;
	box-shadow:0 0 10px #666;
}
.style2 {border:10px solid #ccc}
`;
export default Forms;
