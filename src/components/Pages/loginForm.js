import React from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import styled from "styled-components";

import {  Button, 
    
     Form, 
     Grid,  
     Header,  
     Image,  
     Message,  
     Segment} from "bootstrap/dist/css/bootstrap.min.css";

const LoginForm = () => (

  <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
// <div className="login-form">

  //   <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
  //     <Grid.Column style={{ maxWidth: 450 }}>
  //       <Image centered src="https://www.robinwieruch.de/img/page/logo.svg" />
  //       <Header as="p" color="blue" textAlign="center">
  //         <br />
  //         Login
  //       </Header>
  //       <Form size="large">
  //         <Segment stacked>
  //           <Form.Input
  //             fluid
  //             icon="user"
  //             iconPosition="left"
  //             placeholder="Email address"
  //             label="Email Address"
  //           />
  //           <Form.Input
  //             fluid
  //             icon="lock"
  //             iconPosition="left"
  //             placeholder="Password"
  //             type="password"
  //           />

  //           <Button color="blue" fluid size="large">
  //             Login
  //           </Button>
  //         </Segment>
  //       </Form>
  //       <Message>
  //         Not registered yet? <a href="#">Sign Up</a>
  //       </Message>
  //     </Grid.Column>
  //   </Grid>
  // </div>
);

const form = styled.div`

form-style-1;
	margin:10px auto;
	width: 400px;
	padding: 40px;
	font: 13px "Lucida Sans Unicode" "Lucida Grande", sans-serif;
}
.form-style-1 li {
	padding: 0;
	display: block;
	list-style: none;
	margin: 10px 0 0 0;
}
.form-style-1 label{
	margin:0 0 3px 0;
	padding:0px;
	display:block;
	font-weight: bold;
}
.form-style-1 input[type=text], 
.form-style-1 input[type=date],
.form-style-1 input[type=datetime],
.form-style-1 input[type=number],
.form-style-1 input[type=search],
.form-style-1 input[type=time],
.form-style-1 input[type=url],
.form-style-1 input[type=email],
textarea, 
select{
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	border:1px solid #BEBEBE;
	padding: 7px;
	margin:0px;
	-webkit-transition: all 0.30s ease-in-out;
	-moz-transition: all 0.30s ease-in-out;
	-ms-transition: all 0.30s ease-in-out;
	-o-transition: all 0.30s ease-in-out;
	outline: none;	
}
.form-style-1 input[type=text]:focus, 
.form-style-1 input[type=date]:focus,
.form-style-1 input[type=datetime]:focus,
.form-style-1 input[type=number]:focus,
.form-style-1 input[type=search]:focus,
.form-style-1 input[type=time]:focus,
.form-style-1 input[type=url]:focus,
.form-style-1 input[type=email]:focus,
.form-style-1 textarea:focus, 
.form-style-1 select:focus{
	-moz-box-shadow: 0 0 8px #88D5E9;
	-webkit-box-shadow: 0 0 8px #88D5E9;
	box-shadow: 0 0 8px #88D5E9;
	border: 1px solid #88D5E9;
}
.form-style-1 .field-divided{
	width: 49%;
}

.form-style-1 .field-long{
	width: 100%;
}
.form-style-1 .field-select{
	width: 100%;
}
.form-style-1 .field-textarea{
	height: 100px;
}
.form-style-1 input[type=submit], .form-style-1 input[type=button]{
	background: #4B99AD;
	padding: 8px 15px 8px 15px;
	border: none;
	color: #fff;
}
.form-style-1 input[type=submit]:hover, .form-style-1 input[type=button]:hover{
	background: #4691A4;
	box-shadow:none;
	-moz-box-shadow:none;
	-webkit-box-shadow:none;
}
.form-style-1 .required{
	color:red;
}
  }
}

`;

export default LoginForm;
