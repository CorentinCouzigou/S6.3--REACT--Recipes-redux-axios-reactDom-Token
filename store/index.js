import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import dataRecipes from 'src/middlewares/dataRecipes';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(dataRecipes),
);

const store = createStore(reducer, enhancers);

export default store;
