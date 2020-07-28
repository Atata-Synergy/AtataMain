import React, { Component } from 'react'
import { MuiThemeProvider, AppBar, TextField,RaisedButton } from '@material-ui/core';

export class LogisticsbuyerDetails extends Component {
    continue = e => {
        e.preventDefault();

    }
    render() { 
       return (
            <MuiThemeProvider>
                <div>
<AppBar title='Enter Full Name'/>
<TextField
placeholder='Enter Full Name'
hintText="Enter Your Name"
/>

<p/>
<TextField
placeholder='Email Address'
hintText="Enter Email Address"
/>

<p/>
<TextField
placeholder='Phone Number'
hintText="123456"
/>
<p/>

<TextField
placeholder='Home Address'
hintText="Home Address"
/>
<p/>
<TextField
placeholder='Drop In Address'
hintText="Drop in Address"
/>
<p/>

</div>
 </MuiThemeProvider>
        )
    }
}

export default LogisticsbuyerDetails;
