import React from "react";
import 'react-bootstrap';
import Forms from "../Pages/rfqForm"
import { Col, Row, Button, Form, FormGroup, Label, Input, fieldset} from 'reactstrap';
import styled from "styled-components";
import meeting from "../Image/Team.png";


function RFQ() {
  return (
    <RequestForm>
      <div className='form'>

      </div>
      <div className='Image'>
        
      </div>
    </RequestForm>
    
  );
}

const RequestForm = styled.div`
display: flex;
width: 90%;
margin: auto;

.form{
  width:50%;
}

.Image{
  width:50%;
}
 
`;

export default RFQ;
