import React, { Component } from 'react'
import styled from "styled-components"

class product extends Component {
    render() {
        return (
            
            <div className="MainContainer container-fluid-row">
            <div className="row">
            <div className="d-flex col-md-8">
            <hr/>
            </div>

            </div>
                
            </div>
        )
    }
}


const productCart = styled.div`

MainContainer :
 
  {
      flex:1,
      padding: 10,
      justifyContent: center;
      alignItems: center;
      border:2px;
      borderWidth: 5;
      borderColor: #FF1744;
   
  }
width:97%;
background:radial-gradient red;
padding:15px 0px;

.body{
  background:radial-gradient red;
}
.card{
  width: 15rem; 
  padding:5px 5px;
 /** box-shadow: 5px 5px 0px 0px #363636;**/
  }
  
hr{
  width:80%;
  border: solid 5px var(--colorAsh);
}
.group{
  padding:0px 10px ;
  margin: 10px;
}
.flex{
  dislay: flex;
  justify-content: space-between;

}
.card:hover{
  box-shadow: 5px 10px 20px 1px #363636 !important;
}

  .card-container {
     box-shadow: 0px 4px 8px 0px rgba(196, 67, 67, 0.2);
     margin:10px;
     padding: 20px 5px;

      /* Card look */
      transition: 0.3s;
      background-color: green;
       border-left: 5px solid #5f37ff;
      /* Blue left border */
    }
    .title {
      color: var(--colorBlack);
      font-family: "Muli", sans-serif;
      font-size: 16px;
      margin: 0 3px;
    .card-img-top{
        transform: scale(1);
    }
    .card-img-top:hover{
      padding:10px 5px;
        transform: scale(1.5);
    }
  .overflow{
      overflow: hidden;
  }
    .card-container:hover {
      box-shadow: 16px 0px rgba(0, 0, 0, 0.2);
    }
.card-body{
padding:30px 0!important;
}
.container-fluid-row{
  padding-top:6rem;
  padding-left:40px;
  border:1px solid #ccc;
}

`;

export default product;
