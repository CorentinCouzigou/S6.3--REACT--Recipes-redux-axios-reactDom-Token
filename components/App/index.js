import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { checkToken } from 'src/actions/user';

import Menu from 'src/containers/Menu';
import Home from 'src/containers/Home';
import Recipe from 'src/containers/Recipe';
import Error from 'src/components/Error';

import Loading from './Loading';

import './style.scss';

function App({ loading, getDataRecipes, checkIsLogged }) {
  useEffect(() => {
    getDataRecipes();
    checkIsLogged();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipe/:name" component={Recipe} />
        <Route><Error /></Route>
      </Switch>
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
};

App.defaultProps = {
  loading: false,
};

export default App;
