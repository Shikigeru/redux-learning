import React from 'react';
import {connect} from 'react-redux';
import {inputAction} from './actions/';

const InputMirror = (props) => {
  return (
    <div>
      <input type="text" value={props.inputValue} onChange={props.inputChanged}/>
      <p>{props.inputValue}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    inputChanged: (e) => {
      inputAction.text = e.target.value;
      dispatch(inputAction);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputMirror);