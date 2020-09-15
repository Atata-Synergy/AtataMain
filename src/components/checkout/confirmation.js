import React from "react";
import styled from "styled-components";
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

export default function Confirmation() {
  return (
    <>
      <Container>
        <p>
          <PeopleOutlineIcon />
          Buyers Details
        </p>
      </Container>

      <Container>
        
        <p><DoneOutlineIcon />Checkout Details</p>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 80%;
  padding: 20px;
  margin: 5px auto;
  box-shadow: 2px 2px 10px var(--colorAsh);
  border-radius: 18px;
  font-family: "Muli", sans-serif !important;
  p {
    margin: 0 50px;
    padding: 20px;
    background: var(--colorAsh);
    border-radius: 20px;
  }

  .d-flex {
    display: flex;
  }
`;
