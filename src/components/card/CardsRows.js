import React, { Component } from 'react';
import Card from "../card/CardUi"
import img1 from "../Image/clothes.png";
import img2 from "../Image/clothe1.png";
import img3 from "../Image/accessories.png";
import img4 from "../Image/clothe2.png";
import img5 from "../Image/clothe3.png";
import img6 from "../Image/shoes.png";
import styled from "styled-components";




class Cards extends Component {
    render (){
        return (
          <MyCard>
            <div className="container-fluid d-flex mt-2 mb-2 CategoryTitle">
                   
             
            <Card/>
            
</div>

          
            
             </MyCard>
            
        );
    }
}


const MyCard = styled.div`
width: 97%;
margin: auto;
height: 900px;
background-color: var(--colorLight);
.CategoryTitle {
  .CategoryName {
    font-family: "Muli", sans-serif;
    font-weight: bold;
    font-size: 30px;
    padding: 5px;
  }

.card{
  width: 15rem; 
  margin:10px
 /** box-shadow: 5px 5px 0px 0px #363636;**/
  }
.card:hover{
  box-shadow: 5px 10px 20px 1px #363636 !important;
}
hr{
  width:80%;
  border: solid 5px var(--colorAsh);
}

.flex{
  dislay: flex;
  justify-content: space-between;
}
  .card-container {
     box-shadow: 0px 4px 8px 0px rgba(196, 67, 67, 0.2);
     padding:30px;

      /* Card look */
      transition: 0.3s;
      background-color: green;
       border-left: 5px solid #5f37ff;
      /* Blue left border */
    }
    .card-img-top{
        transform: scale(1);
    }
    .card-img-top:hover{
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
.card-text{
  font-size:15px;
  padding:1px 3px;
}
.container-fluid-row{
  padding-top:6rem;
}

`;
export default Cards;