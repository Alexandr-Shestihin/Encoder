import React from 'react';
import s from "./Сalculator.module.scss";

const Сalculator = (props) => {
   ///////////Калькулятор//////////////
   let sum;
   let minus;

   let resultCalc = React.createRef();

   let addOne = () => { resultCalc.current.value += 1 };
   let addTwo = () => { resultCalc.current.value += 2 };
   let addThree = () => { resultCalc.current.value += 3 };
   let addFour = () => { resultCalc.current.value += 4 };
   let addFive = () => { resultCalc.current.value += 5 };
   let addSix = () => { resultCalc.current.value += 6 };
   let addSeven = () => { resultCalc.current.value += 7 };
   let addEight = () => { resultCalc.current.value += 8 };
   let addNine = () => { resultCalc.current.value += 9 };
   let addZero = () => { resultCalc.current.value += 0 };

   let summarize = () => {
      sum = +resultCalc.current.value;
      resultCalc.current.value = '';
   };
   let subtract = () => {
      minus = +resultCalc.current.value;
      resultCalc.current.value = "";
   }
   let showResult = () => {
      let totalКesult = +resultCalc.current.value;
      if (sum) {
         resultCalc.current.value = totalКesult + sum;
         sum = 0;
      } else resultCalc.current.value = minus - totalКesult;
      minus = 0;
   }
   let clean = () => {
      resultCalc.current.value = "";
      sum = 0;
      minus = 0;
   };
   return (
      <div className={s.calc}>
         <p>Просто Калькулятор</p>
         <input ref={resultCalc} type="text" /><br />
         <button onClick={addOne}>1</button>
         <button onClick={addTwo}>2</button>
         <button onClick={addThree}>3</button>
         <button onClick={summarize}>+</button><br />
         <button onClick={addFour}>4</button>
         <button onClick={addFive}>5</button>
         <button onClick={addSix}>6</button>
         <button onClick={subtract}>-</button><br />
         <button onClick={addSeven}>7</button>
         <button onClick={addEight}>8</button>
         <button onClick={addNine}>9</button>
         <button onClick={showResult}>=</button><br />
         <button onClick={addZero}>0</button>
         <button onClick={clean}>Сброс</button>
      </div>
   )
}
export default Сalculator;