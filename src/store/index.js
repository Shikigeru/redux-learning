import {createStore} from 'redux';
import {rootReducer} from '../reducers/root-reducer';

const initialState = {
  count: 0,
  inputValue: ''
};

const store = createStore(rootReducer, initialState);

export default store;