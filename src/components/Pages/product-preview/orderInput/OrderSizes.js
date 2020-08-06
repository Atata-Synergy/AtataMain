import React, { Component } from "react";
import styled from "styled-components";

class Color extends Component {
  render() {
    return (
      <div>
        <ColorSelect>
          <div className="color">
            <table style={{ width: "100%" }}>
              <tr>
                <td>
                  <p className="Name"> Available Sizes: </p>
                </td>
                <td>
                  <div className="Select"></div>
                </td>
              </tr>
            </table>
          </div>
        </ColorSelect>
      </div>
    );
  }
}

const ColorSelect = styled.div`
  display: flexbox;
  font-family: "Quicksand", sans-serif;
  p {
    font-weight: 700;
  }
  .Select {
    list-style-type: none;
    display: flex;
    width: 100px;
    height: 50px;
    padding: 0 50px;
    margin: auto;
  }
  .color {
    display: flex;
  }
`;
export default Color;
