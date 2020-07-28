import React from 'react';
import CardCard from './card'
import img1 from "../Image/clothes.png";
import img2 from "../Image/clothe1.png";
import img3 from "../Image/Furniture.png";
import img4 from "../Image/Computer.png";
import img5 from "../Image/clothe3.png";
import img6 from "../Image/machine1.png";
import styled from "styled-components";
import "./card-style.css"


function Card(props) {
    return(
      <MyCard>
        <div className="d-flex mt-2 mb-2 px-2 CategoryTitle">
         <div className="CategoryName">
          <p>Just for You</p>
        </div>
            <hr />
      </div>
      <div className="group d-flex">
        {/* <div className="card text-center">
        <div className="overflow">
        <img src= {img1} alt="Image1" className="card-img-top" />
        </div>        
        <div className="card-body text-dark">
        
        <p className="card-text text-secondary">10cm x 4.5m various sizes adhesive</p>
        <p><b>$20.00 - $30.00</b></p>
        <a href="#" className="btn btn-outline-success">View More</a>
        </div>
        </div> */}
        <div className="card text-center">
        <div className="overflow">
        <img src= {img2} alt="Image1" className="card-img-top" />
        </div>        
        <div className="card-body text-dark">
        
        <p className="card-text text-secondary">10cm x 4.5m various sizes adhesive</p>
        <p><b>$20.00 - $30.00</b></p>
        <a href="#" className="btn btn-outline-success">View More</a>
        </div>
        </div>
        <div className="card text-center">
        <div className="overflow">
        <img src= {img1} alt="Image1" className="card-img-top" />
        </div>        
        <div className="card-body text-dark">
        
        <p className="card-text text-secondary">10cm x 4.5m various sizes adhesive</p>
        <p><b>$20.00 - $30.00</b> / unit</p>
        <a href="#" className="btn btn-outline-success">View More</a>
        </div>
        </div>
        <div className="card text-center">
        <div className="overflow">
        <h4 className="card-title"></h4>
        <img src= {img4} alt="Image1" className="card-img-top" />
        </div>        
        <div className="card-body text-dark">
        
        <p className="card-text text-secondary">10cm x 4.5m various sizes adhesive</p>
        <p><b>$20.00 - $30.00</b>/ unit</p>
        <a href="#" className="btn btn-outline-success">View More</a>
        </div>
      </div>
      <div className="card text-center">
        <div className="overflow">
        <img src= {img5} alt="Image1" className="card-img-top" />
        </div>        
        <div className="card-body text-dark">
        
        <p className="card-text text-secondary">10cm x 4.5m various sizes adhesive</p>
        <p><b>$20.00 - $30.00</b></p>
        <a href="#" className="btn btn-outline-success">View More</a>
        </div>
        </div>
        <div className="card text-center">
        <div className="overflow">
        <img src= {img6} alt="Image1" className="card-img-top" />
        </div>        
        <div className="card-body text-dark">
        
        <p className="card-text text-secondary">10cm x 4.5m various sizes adhesive</p>
        <p><b>$20.00 - $30.00</b> / unit</p>
        <a href="#" className="btn btn-outline-success">View More</a>
        </div>
        
      </div>
      
         </div>
         <div className="group d-flex">
        <div className="card text-center">
        <div className="overflow">
        <img src= {img1} alt="Image1" className="card-img-top" />
        </div>        
        <div className="card-body text-dark">
        
        <p className="card-text text-secondary">10cm x 4.5m various sizes adhesive</p>
        <p><b>$20.00 - $30.00</b></p>
        <a href="#" className="btn btn-outline-success">View More</a>
        </div>
        </div>
        <div className="card text-center">
        <div className="overflow">
        <img src= {img2} alt="Image1" className="card-img-top" />
        </div>        
        <div className="card-body text-dark">
        
        <p className="card-text text-secondary">10cm x 4.5m various sizes adhesive</p>
        <p><b>$20.00 - $30.00</b></p>
        <a href="#" className="btn btn-outline-success">View More</a>
        </div>
        </div>
        <div className="card text-center">
        <div className="overflow">
        <img src= {img1} alt="Image1" className="card-img-top" />
        </div>        
        <div className="card-body text-dark">
        
        <p className="card-text text-secondary">10cm x 4.5m various sizes adhesive</p>
        <p><b>$20.00 - $30.00</b> / unit</p>
        <a href="#" className="btn btn-outline-success">View More</a>
        </div>
        </div>
        <div className="card text-center">
        <div className="overflow">
        <h4 className="card-title"></h4>
        <img src= {img4} alt="Image1" className="card-img-top" />
        </div>        
        <div className="card-body text-dark">
        
        <p className="card-text text-secondary">10cm x 4.5m various sizes adhesive</p>
        <p><b>$20.00 - $30.00</b>/ unit</p>
        <a href="#" className="btn btn-outline-success">View More</a>
        </div>
      </div>
      <div className="card text-center">
        <div className="overflow">
        <img src= {img5} alt="Image1" className="card-img-top" />
        </div>        
        <div className="card-body text-dark">
        
        <p className="card-text text-secondary">10cm x 4.5m various sizes adhesive</p>
        <p><b>$20.00 - $30.00</b></p>
        <a href="#" className="btn btn-outline-success">View More</a>
        </div>
        </div>
        <div className="card text-center">
        <div className="overflow">
        <img src= {img6} alt="Image1" className="card-img-top" />
        </div>        
        <div className="card-body text-dark">
        
        <p className="card-text text-secondary">10cm x 4.5m various sizes adhesive</p>
        <p><b>$20.00 - $30.00</b> / unit</p>
        <a href="#" className="btn btn-outline-success">View More</a>
        </div>
      </div>
      </div>
        
        </MyCard>
    );
}

const MyCard = styled.div`

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
}

`;
export default Card;
