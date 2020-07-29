import React from "react";
import styled from "styled-components";

function PriceList(props) {
  return (
    <Table>
      <table>
        <tr>
          <td>{props.Commodity}</td>
          <td>{props.country}</td>
          <td>=</td>
          <td>{props.price}</td>
         <td> {/* <td><i className={props.icon}></i></td> */}</td>
        </tr>
      </table>
    </Table>
  );
}
const Table = styled.div`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 90%;
  margin:auto;
  font-size: 14px;
  
  td:nth-child(1){
    width: 40%;
  }
  td {
    text-align: center;
    width: 20%;
    padding: 8px auto;
  }
`;
export default PriceList;
