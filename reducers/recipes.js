// import data from 'src/data';

import {
  DATA_RECIPES,
} from 'src/actions/recipes';

export const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DATA_RECIPES: {
      return {
        ...state,
        list: action.value,
      };
    }
    default:
      return state;
  }
};

export default reducer;
