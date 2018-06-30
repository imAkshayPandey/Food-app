import React from 'react';
import './css.css';

// import ReactDOM from 'react-dom';




const Tick=()=> (

 
<div className="time">
          <p>{new Date().toLocaleTimeString()}</p>
          
        </div>
      
    );
  
  // setInterval(Tick, 1000);


  export default Tick;
  
  
  