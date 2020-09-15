import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

function BillingDetails() {
  return (
    <Card>
      <div className="Details">
        <p>Billing Details</p>
        <div className="name">
          <TextField
            className="Text-Field"
            disabled
            id="filled-disabled"
            label="First Name"
            defaultValue="Oluwasegun"
            variant="filled"
          />
          <TextField
            className="Text-Field"
            disabled
            id="filled-disabled"
            label="Middle Name"
            defaultValue="Johnson"
            variant="filled"
          />
          <TextField
            className="Text-Field"
            disabled
            id="filled-disabled"
            label="Last Name"
            defaultValue="Are"
            variant="filled"
          />
        </div>
        <div>
          <TextField
            className="Text-Field"
            disabled
            id="filled-disabled"
            label=" Full Address"
            defaultValue="19 Olatunji Ige street, Ikosi Ketu, Lagos state, NG"
            variant="filled"
          />
        </div>
        <div className="name">
        <TextField
            className="Text-Field"
            disabled
            id="filled-disabled"
            label="Email"
            defaultValue="it@atata57.com"
            variant="filled"
          />
          <TextField
            className="Text-Field"
            disabled
            id="filled-disabled"
            label="Phone Number"
            defaultValue="07052565656"
            variant="filled"
          />
        </div>
        <div className="zip">
        <TextField
            className="Text-Field"
            disabled
            id="filled-disabled"
            label=" Zip code"
            defaultValue="23401"
            variant="filled"
          />
        </div>
      </div>
    </Card>
  );
}

const Card = styled.div`
  width: 70%;
  padding: 20px;
  margin: auto;
  box-shadow: 2px 2px 10px var(--colorAsh);
  border-radius: 18px;
  font-family: "Muli", sans-serif !important;
  input{
    background-color: var(--colorLight);
  }
  .Details {
    width: 90%;
    margin: auto;
    .Text-Field{
      width:98%;
      margin: 5px 5px;
    }
    .name{
      display: flex;
    }
    .zip{
      width: 20%;
    }
  }
  p {
    font-weight: 700;
    font-size: 18px;
    color: var(--colorGreen);
  }
`;

export default BillingDetails;
