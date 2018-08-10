import React from 'react';
import { connect } from 'react-redux';
import {incrementAction, decrementAction} from './actions/';

const Counter = (props) => {
  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {props.count}</p>
      <button onClick={props.onIncrementClick}>Increment</button>
      <button onClick={props.onDecrementClick}>Decrement</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementClick: () => {
      dispatch(incrementAction)
    },
    onDecrementClick: () => {
      dispatch(decrementAction)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);