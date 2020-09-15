import React, { Component } from 'react'
import styled from 'styled-components'
import Divider from '@material-ui/core/Divider';

class ItemName extends Component {
  render() {
    return (
        <div>
        <Item>
            <p>Men's Shirt</p>
            <span>Men's Army Fans Military Tactical Jacket Camouflage Waterproof Combat Jacket Hoody Softshell Coat Army Uniform</span>
        <Divider />
        </Item>     
      </div>
    )
  }
}

const Item = styled.div`
font-family: 'Quicksand', sans-serif;
p{
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 7px;
}
span{
    font-size: 15px;
    margin-bottom: 10px;
}


`

export default ItemName;
