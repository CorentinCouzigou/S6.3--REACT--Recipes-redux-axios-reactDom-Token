export const LOGIN = 'LOGIN';
export const SAVE_USER = 'SAVE_USER';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';
export const TOGGLE_CONNECTED = 'TOGGLE_CONNECTED';
export const TOGGLE_DISCONNECTED = 'TOGGLE_DISCONNECTED';
export const CHANGE_PSEUDO = 'CHANGE_PSEUDO';
export const SAVE_TOKEN = 'SAVE_TOKEN';
export const CHECK_TOKEN = 'CHECK_TOKEN';

export const saveToken = (payload) => ({
  type: SAVE_TOKEN,
  payload,
});
export const login = () => ({
  type: LOGIN,
});
export const saveUser = (pseudo) => ({
  type: SAVE_USER,
  pseudo,
});
export const changeInputValue = (value, nature) => ({
  type: CHANGE_INPUT_VALUE,
  value,
  nature,
});
export const changeField = (key, value) => ({
  type: CHANGE_FIELD_VALUE,
  value,
  key,
});
export const toggleConnected = () => ({
  type: TOGGLE_CONNECTED,
});
export const toggleDisconnected = () => ({
  type: TOGGLE_DISCONNECTED,
});
export const changePseudo = (pseudo) => ({
  type: CHANGE_PSEUDO,
  pseudo,
});
export const checkToken = (pseudo) => ({
  type: CHECK_TOKEN,
  pseudo,
});
