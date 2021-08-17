export const GET_DATA = 'GET_DATA';
export const DATA_RECIPES = 'DATA_RECIPES';

export const getDataRecipes = () => ({
  type: GET_DATA,
});

export const ChangeDataRecipes = (value) => ({
  type: DATA_RECIPES,
  value,
});
