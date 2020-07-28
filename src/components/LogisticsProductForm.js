import React, { Component } from 'react'
import { MuiThemeProvider, AppBar, TextField,RaisedButton } from '@material-ui/core';

export class LogisticsProductForm extends Component {
    continue = e => {
        e.preventDefault();

    }
    render() { 
       return (
            <MuiThemeProvider>
                <div>
<AppBar title='Enter Product Details'/>
<TextField
placeholder='Enter Product Name'
hintText="Enter Your Name"
/>

<p/>
<TextField
placeholder='Product ID'
hintText="Enter Your Product ID"
/>

<p/>
<TextField
placeholder='Enter Product KG'
hintText="123456"
/>
<p/>
<select>
                
                <option>Air Freigh</option> 
              <option>Sea Freigh </option>
              <option>Road Freigh</option>
                          
            </select>

</div>
 </MuiThemeProvider>

        )
    }
}

export default LogisticsProductForm
