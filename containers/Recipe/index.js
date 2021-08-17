import { connect } from 'react-redux';
import Recipe from 'src/components/Recipe';
import { withRouter } from 'react-router-dom';

import { findRecipe } from 'src/selectors/recipes';

const mapStateToProps = (state, history) => {
  const selectedRecipe = history.location.pathname;
  const recipeCut = selectedRecipe.slice(8);

  return ({
    recipe: findRecipe(state.recipes.list, recipeCut),
  });
};

const mapDispatchToProps = {};

const container = connect(mapStateToProps, mapDispatchToProps)(Recipe);

export default withRouter(container);
