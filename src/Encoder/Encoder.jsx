import React from 'react';
import s from "./Encoder.module.css";

const Encoder = (props) => {
   let control = 0;
   const i = control || -1;
   let a = 1;
   let b = 2;
   console.log(a + (i * b))


   /* function encoder(str, pass) {
      let i = pass;
      if ((String(i).length < 8) && i) {
         let result = '';
         for (let key of str) {
            let resultIss = key.codePointAt() + pass - (pass / 2) + (pass ** (1 / 2));
            console.log(resultIss.toFixed(0))
            result += String.fromCodePoint(resultIss.toFixed(0))
         }
         return result;
      } else
         return 'Пароль не соответствует требованиям!';
   }
     console.log(encoder('22222eddd', 11111))
 */
   /* function decoder(str, pass) {
      let result = '';
      for (let key of str) {
         let resultIccDecoder = key.codePointAt();
         resultIccDecoder = resultIccDecoder - pass + (pass / 2) - (pass ** (1 / 2))
         result += String.fromCodePoint(resultIccDecoder.toFixed(0))
      }
      return result
   } */

   let deleteText = () => {
      props.deleteText()
   }
   const onChangeTextEncoder = (e) => {
      props.updateValue(e.target.value);
   }
   const onChangePasswordValue = (e) => {
      props.updatePasswordValue(e.target.value);
   }
   return (
      <div>
         <div>Введите сообщения для кодировки: </div>
         <textarea
            onChange={onChangeTextEncoder}
            value={props.encoderData.textForEncoder}
         />
         <div>Введите пароль из числа (ДО 7-Х СИМВОЛОВ): </div>
         <input
            placeholder="Пароль"
            value={props.encoderData.passwordValue}
            onChange={onChangePasswordValue}
         />
         <div>Результат: </div>
         <textarea
            value={props.encoderData.textResult}
         />
         <br />
         <button
            onClick={props.encoder}
            className={s.mainButton}
         >Зашифровать!</button>
         <button
            className={s.mainButton}
            onClick={props.decoder}
         >Дешифровать!</button>
         <button
            className={s.mainButton}
            onClick={deleteText}
         >Очистить!</button>
      </div >
   )
}
export default Encoder;