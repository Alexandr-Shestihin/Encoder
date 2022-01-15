import { combineReducers, createStore } from "redux";
import encoderReducer from './encoder-reducer';

const reducers = combineReducers({
   encoderReducer
});

const store = createStore(reducers);
export default store;