import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import SimpleCounter from "./SimpleCounter";

let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;

setInterval(() => {
// Incio del contador y contador de milecimas de segundos
    if(num6++, num6 === 100){
        num5++;
        num6 = 0;
    }
// contador de segundos
    if(num5 === 60){
        num4++;
        num5 = 0;
    }
// contador de minutos
    if(num4 === 60){
        num3++;
        num4 = 0;
    }
// contador de dias
    if(num3 === 24){
        num2++;
        num3 = 0;
    }
// contador de semanas
    if(num2 === 7){
        num1++;
        num2 = 0;
    }
    
  ReactDOM.render(
    <SimpleCounter
      num1={num1}
      num2={num2}
      num3={num3}
      num4={num4}
      num5={num5}
      num6={num6}
    />,
    document.querySelector("#root")
  );
}, 10);
