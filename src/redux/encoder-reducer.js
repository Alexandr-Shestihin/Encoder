const UPDATE_VALUE = 'UPDATE-VALUE';
const DELETE_TEXT = 'DELETE-TEXT';
const UPDATE_PASSWORD_VALUE = "UPDATE-PASSWORD-VALUE";
const CODER = 'CODER';

const initialised = {
   textForEncoder: '',
   textResult: '',
   passwordValue: '',
}

const encoderReducer = (state = initialised, action) => {
   switch (action.type) {
      case UPDATE_VALUE: {
         return {
            ...state,
            textForEncoder: action.text
         }
      }
      case UPDATE_PASSWORD_VALUE: {
         if (!isNaN(Number(action.text))) {
            return { ...state, passwordValue: action.text }
         } else {
            alert('В поле ввода "Пароль" вводить только числа!')
            return state;
         }
      }
      case DELETE_TEXT: {
         return {
            ...state,
            textForEncoder: '',
            textResult: '',
            passwordValue: ''
         }
      }
      case CODER: {
         if ((String(state.passwordValue).length < 8) && state.passwordValue) {

            let result = '';
            let pass = Number(state.passwordValue);
            let sign = action.choose || -1;// выбираем знак минус или плюс

            for (let key of state.textForEncoder) {
               let resultIss = key.codePointAt() + (pass * sign) - ((pass / 2) * sign) + ((pass ** (1 / 2)) * sign);

               result += String.fromCodePoint(resultIss.toFixed(0));
            }
            return {
               ...state,
               textResult: result,
            }

         } else return {
            ...state,
            textResult: 'Длина пароля не соответствует требованиям!'
         }

      }

      default:
         return state;
   }
}

export const updateTextValueActionCreator = (text) => {
   return { type: UPDATE_VALUE, text }
}
export const updatePasswordValueAC = (text) => {
   return { type: UPDATE_PASSWORD_VALUE, text }
}
export const deleteTextActionCreator = () => {
   return { type: DELETE_TEXT }
}
export const encoderActionCreator = () => {
   return { type: CODER, choose: 1 }
}
export const decoderActionCreator = () => {
   return { type: CODER, choose: 0 }
}

export default encoderReducer;