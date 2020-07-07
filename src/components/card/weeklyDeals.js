import React from "react";

import styled from "styled-components";
import Img1 from "../Image/machineTransparent.png";
import Img2 from "../Image/Computer.png";
import Img3 from "../Image/Furniture.png";
import Img4 from "../Image/gadgets.png";
import Img5 from "../Image/phones.png";

//const [timerDays, setTimerDays] = useState('00');
//const [timerHours, setTimerHours] = useState('00');
//const [timerMinutes, setTimerMinutes] = useState('00');
//const [timerSeconds, setTimerSeconds] = useState('00');
//let interval = useRef();

{/*const startTimer = () => {
const countdownDate = new Date('June 30,2020 00:00:00').getTime();


interval = setInterval (()=> {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor (distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor ((distance % (1000 * 60 * 60 * 24)/(1000 *60 * 60 )));
  const minutes = Math.floor ((distance % (1000 * 60 * 60 ))/ (1000 * 60));
  const seconds = Math.floor ((distance / (1000 * 60 * 60 ))/ 1000);

  if(distance < 0) {
//stop timer
clearInterval(interval.current);
  } else {
     //update timer
     setTimerDays (days);
     setTimerHours (hours);
     setTimerMinutes (minutes);
     setTimerSeconds (seconds); 

  }
  

}, 1000);
};
//componentDidMount
// useEffect (() => {
startTimer(); 
return ( ) => {
  clearInterval (interval.current);
};*/}
  



function LatestDeals(props) {
  return (
    <MyCateCard>
      <div className="d-flex mt-2 mb-2 px-2 CategoryTitle">
        <div className="CategoryName">
          <p>Weekly Deals</p>
        </div>
        <hr />
      </div>
      <div className="group d-flex">
        <div className="row Deal-poster">
          <div className="percentage-off">
                      </div>
       {/* <section className="timer-container">
      <section className="timer">*/}

  <h1>10% Off Discount</h1>
  </div>

{/*<div>
  <section>
    <p>{timerDays}</p> 
    <p><small>Days </small></p>
  </section>
  <span>:</span>
  <section>
    <p>{timerHours}</p>
    <p><small>Hours</small></p>
  </section>
  <span>:</span>
  <section>
    <p>{timerMinutes}</p>
    <p><small>Minutes</small></p>
  </section>
  <span>:</span>
  <section>
  <p>{timerSeconds}</p>
    <p><small>Seconds</small></p>
</section>   
</div>
      </section>
    </section>
</div>*/}
        <div className="bg-white d-flex">
          <div className="item">
            <div className="imageContainer">
              <img src={Img1} />
            </div>
            <div className="price">Bamboo Color</div>
            <div className="details">
              <span>AC,Ghana</span>
            </div>
          </div>
          <div className="item">
            <div className="imageContainer">
              <img src={Img3} />
            </div>
            <div className="price">Gaming</div>
            <div className="details">
              <span>LG, Nigeria</span>
            </div>
            
            <div className="price">Bamboo Color</div>
            <div className="details">
              <span>AC,Ghana</span>
            </div>
          </div>
          <div className="item">
            <div className="imageContainer">
              <img src={Img3} />
            </div>
            <div className="price">Gaming</div>
            <div className="details">
              <span>LG, Nigeria</span>
            </div>
            
            <div className="price">Bamboo Color</div>
            <div className="details">
              <span>AC,Ghana</span>
            </div>
          </div>
          <div className="item">
            <div className="imageContainer">
              <img src={Img3} />
            </div>
            <div className="price">$20,000-$40,000</div>
            <div className="details">
              <span>LG, Nigeria</span>
            </div>
            
            <div className="price">Bamboo Color</div>
            <div className="details">
              <span>AC,Ghana</span>
            </div>
          </div>
          <div className="item">
            <div className="imageContainer">
              <img src={Img3} />
            </div>
            <div className="price">Gaming</div>
            <div className="details">
              <span>LG, Nigeria</span>
            </div>
          </div>
          </div>
      </div>
      

          </MyCateCard>
          
  );
}

const MyCateCard = styled.div`
.timer-container{
  background-color: yellow;
  background-position: center;
  background-size:cover;
  background-repeat: no-repeat;
  color: white;
  width:30px;
  height: 30px;
}
.timer{
   background-color: black;
   display: flex;
   flex:column;
   align-items: center;
   justify-content: center;
   padding-top: 2em;
   padding-bottom: 7em;
   width: 50%;
   height: 50%;


}
.timer div:first-child{
  text-align:center;
  }
  .timer-icon{
    font-size:8em;
  }
  h2{
    font-weight: 600;
    margin-bottom: 0.5em;
  }
  .timer div:first-child p{
    color: #fff;
  }
  .timer div:last-child {
    border:1px solid #fff;
    border-radius: 3px;
    display:grid;
    grid-template-columns: repeat(7, 1fr);
    margin-top:3em;
    padding: 3em;
    text-align:center;
  }
  section p:first-child, .timer div:last-child span{
    font-size:3em;
  }
  @media screen and (max-width:480px){
    .timer div:last-child {
      margin-left:2em;
      margin-right:2em;
      padding: 3em 1em;
    }
  }
  width: 98%;
  margin: 1%;
  height: 230px;
  background-color: var(--colorLight);
  .CategoryTitle {
    .CategoryName {
      font-family: "Muli", sans-serif;
      font-weight: bold;
      font-size: 30px;
      padding: 5px;
    }
    hr {
      width: 80%;
      border: solid 5px var(--colorAsh);
    }
  }

  .group {
    background-color: var(--colorYellow);
    text-align: center;
    width: 97%;
    margin: auto;
    height: 173px;
    padding: 10px;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    .Deal-poster {
      width: 250px;
      height: 173px;
      padding: 10px;
      color: var(--colorWhite);
      p {
        font-size: 17px;
        font-weight: bold;
      }
      span {
        padding: 20px;
        color: var(--colorYellow);
        background-color: var(--colorWhite);
        font-size: 30px;
        font-weight: bold;
      }
    }
    .bg-white {
      background-color: var(--colorWhite);
    }
    .item {
      border: solid 1px var(--colorLight);
      background-color: var(--colorWhite);
      width: 200px;
      margin: 1px;
      height: 170px;

      :hover {
        border: solid 1px var(--colorAsh);
      }
      .imageContainer {
        overflow: hidden;
        width: 200px;
        margin: auto;
        img {
          width: 160px;
          height: 130px;
        }
      }
      .price {
        font-weight: bold;
      }
    }
  }
`;

export default LatestDeals;