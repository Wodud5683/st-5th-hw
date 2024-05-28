import { ADD_TEXT } from './textActions';

const initialState = {
  texts: JSON.parse(localStorage.getItem('texts')) || [],
};

const textReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEXT: {
      const newTexts = [...state.texts, action.payload];
      localStorage.setItem('texts', JSON.stringify(newTexts));
      return {
        ...state,
        texts: newTexts,
      };
    }
    default:
      return state;
  }
};

export default textReducer;
