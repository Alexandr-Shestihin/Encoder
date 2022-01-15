import React from 'react';
import s from "./App.css";
import EncoderContainer from './Encoder/EncoderContainer';
import Сalculator from './Сalculator/Сalculator';

const Learn = (props) => {
   return (
      <div className={s.value}>
         <EncoderContainer />
         <Сalculator />
      </div >
   )
}
export default Learn;