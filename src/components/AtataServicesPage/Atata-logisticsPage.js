import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import LogisticsForm from "../LogisticsFormDetails";


export default class AtataLogistics extends Component {
    render() {
        return (
            <>
            
<Container >
        <div className="col-12">
          <div className="row mt-5 mb-5">


         <LogisticsForm/>
         </div>
         </div>
         </Container>
            </>
        )
    }
}
