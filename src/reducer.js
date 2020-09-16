import SHOES_DATA from './SHOES_DATA';

export const initialState = {
  jmlMyFavourites: 0,
  shoes_data: SHOES_DATA,
};

export const actionTypes = {
  CLICK_LIKE: 'CLICK_LIKE',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.CLICK_LIKE:
      return {
        ...state,
        jmlMyFavourites: action.payload.like
          ? state.jmlMyFavourites + 1
          : state.jmlMyFavourites - 1,
        shoes_data: state.shoes_data.map((shoes) => {
          if (action.payload.id === shoes.id) {
            return { ...shoes, like: action.payload.like };
          }
          return shoes;
        }),
      };
    default:
      return state;
  }
};
