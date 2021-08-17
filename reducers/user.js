import {
  CHANGE_INPUT_VALUE,
  TOGGLE_CONNECTED,
  TOGGLE_DISCONNECTED,
  CHANGE_PSEUDO,
  SAVE_TOKEN,
} from 'src/actions/user';

export const initialState = {
  logged: false,
  email: 'bouclierman@herocorp.io',
  password: 'jennifer',
  pseudo: 'anonyme',
  token: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE: {
      if (action.nature === 'email') {
        return {
          ...state,
          email: action.value,
        };
      }
      if (action.nature === 'password') {
        return {
          ...state,
          password: action.value,
        };
      }
      break;
    }
    case TOGGLE_CONNECTED: {
      return {
        ...state,
        logged: true,
        pseudo: action.payload.pseudo,
      };
    }
    case TOGGLE_DISCONNECTED: {
      return {
        ...state,
        logged: false,
        email: '',
        password: '',
        token: '',
      };
    }
    case CHANGE_PSEUDO: {
      return {
        ...state,
        pseudo: action.pseudo,
      };
    }
    case SAVE_TOKEN: {
      return {
        ...state,
        token: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
