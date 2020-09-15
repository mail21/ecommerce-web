import SHOES_DATA from './SHOES_DATA';

export const initialState = {
  shoes_data: SHOES_DATA,
  liked_shoes: [],
};

export const actionTypes = {
  ADD_LIKED: 'ADD_LIKED',
};

export const reducer = (state, action) => {
  console.log(state.liked_shoes);
  switch (action.type) {
    case actionTypes.ADD_LIKED:
      return { ...state, liked_shoes: action.payload };
    default:
      return state;
  }
};
