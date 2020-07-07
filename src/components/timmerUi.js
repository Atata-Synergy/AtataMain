{/*import React, {useEffect, useRef,  useState } from 'react';
import styled from "styled-components";
import "@material-ui/core";

function TimmerUi () {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');
let interval = useRef();

const startTimer = () => {
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
useEffect (() => {
  startTimer(); 
  return ( ) => {
    clearInterval (interval.current);
  };
    
});

  return (
        <section className="timer-container">
      <section className="timer">
<div>
  <span className='mdi mdi-calendar-clock timer-icon'></span>

</div>
<div>
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
  );
}


        


const Timmer = styled.div`

    box-sizing: border-box;
    margin: 0;
    padding: 0;
  
  }
  body{
    font-size: 50%;
  }
  .timer-container{
    background-color: yellow;
    background-position: center;
    background-size:cover;
    background-repeat: no-repeat;
    color: white;
    width:100vw;
    height: 50px;
  }
  .timer{
     background-color: black;
     display: flex;
     flex:column;
     align-items: center;
     justify-content: center;
     padding-top: 2em;
     padding-bottom: 7em;
     width: 100%;
     height: 100%;
  
  
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
  `;*/}