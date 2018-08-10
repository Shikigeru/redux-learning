export const rootReducer = (state, action) => {
  switch(action.type) {
    case 'INCREMENT': 
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    case 'INPUT_CHANGE':
      return { 
        ...state,
        inputValue: action.text
      }
    default:
      return state;
  }
};