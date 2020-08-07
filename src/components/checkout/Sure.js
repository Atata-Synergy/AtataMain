import React from "react";
import styled from "styled-components";

export default function AtataSure() {
  return (
    <Container>
      <div className="AtataSure">
        <p>Do you want to Insure this Goods</p>
        <div className="btns">
          <button className="btn">Yes</button>
          <button className="btn">No</button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  padding: 20px;
  margin: 5px auto;
  box-shadow: 2px 2px 10px var(--colorAsh);
  border-radius: 18px;
  font-family: "Muli", sans-serif !important;
  .AtataSure {
    width: 90%;
    margin: auto;
    text-align: center;
  }
  .btns {
    display: flex;
    margin: auto;
    width: 20%;
    .btn{
      margin: 10px;
      padding: 10px 20px;
      text-align: center;
      border-radius: 10px;
      width: 50%;
      background: var(--colorGreen);
      color: var(--colorLight);
      border: none;
      :hover{
          background: var(--colorRed);
      }
    }
  }
`;
