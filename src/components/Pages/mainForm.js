import React from 'react';
import ReactDOM from "react-dom";
import Forms from "../Pages/rfqForm";
import { Col, Row, Button, Form, FormGroup, Label, Input, fieldset} from 'reactstrap';



function MainForm(props) {
  return (
    <form>

    <div className="forms">
       
      
        < Form>
               <fieldset className="border p-4" style={{width:'50%'}}>
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
        </fieldset>
         </Form>
            </div>
            </form>
  );
}



export default MainForm;

{/*import React from "react";
import ReactDOM from "react-dom";
import { Form } from "semantic-ui-react";

const LoginForm = () => (
  <Form>
    <Form.Group>
      <Form.Input label="Email Address" placeholder="Email Address" />
      <Form.Input label="Password" placeholder="Password" />
    </Form.Group>
    <Form.Button>Submit</Form.Button>
  </Form>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<LoginForm />, rootElement);
*/}
