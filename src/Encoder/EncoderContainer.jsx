import React from 'react';
import { connect } from 'react-redux';
import Encoder from './Encoder';
import { updateTextValueActionCreator, updatePasswordValueAC, deleteTextActionCreator, encoderActionCreator, decoderActionCreator } from '../redux/encoder-reducer';

const mapStateToProps = (state) => {
   return {
      encoderData: state.encoderReducer,
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      updateValue: (text) => dispatch(updateTextValueActionCreator(text)),
      updatePasswordValue: (text) => dispatch(updatePasswordValueAC(text)),
      deleteText: () => dispatch(deleteTextActionCreator()),
      encoder: () => dispatch(encoderActionCreator()),
      decoder: () => dispatch(decoderActionCreator()),
   }
}
const EncoderContainer = connect(mapStateToProps, mapDispatchToProps)(Encoder)
export default EncoderContainer;