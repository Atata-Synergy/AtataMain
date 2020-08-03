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
         <td><i className={props.icon}></i></td>
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
  padding: 5px;

  .fa-sort-up{
    color: red;
  }
  .fa-sort-down{
    color: green;
  }
  
  td {
    text-align: center;
    width: 20%;
    padding: 8px auto;
  }
  td:nth-child(1){
    width: 40%;
    font-weight: bold;
  }
  
  td:nth-child(2){
    width: 10%;
    font-size: 10px;
  }
`;
export default PriceList;
