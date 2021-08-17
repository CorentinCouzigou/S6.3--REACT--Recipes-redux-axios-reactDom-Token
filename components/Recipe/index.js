/* eslint-disable arrow-body-style */
// == Import : npm
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// == Import : local
// Composants
import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Header from './Header';
import Ingredients from './Ingredients';
import Instructions from './Instructions';

// Style
import './style.scss';

// == Composant
function Recipe({ recipe }) {
  console.log(recipe);
  // console.log(history.location.pathname);
  if (!recipe) {
    return <Redirect to="/error" />;
  }
  const recipesRef = useRef();
  useEffect(() => {
    recipesRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [recipe]);
  return (
    <Page>
      <div ref={recipesRef} />
      <AppHeader />
      <div className="recipe">
        <Header
          name={recipe.title}
          thumbnail={recipe.thumbnail}
          author={recipe.author}
          difficulty={recipe.difficulty}
        />
        <Ingredients
          list={recipe.ingredients}
        />
        <Instructions
          steps={recipe.instructions}
        />
      </div>
    </Page>
  );
}

Recipe.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired,
    instructions: PropTypes.array.isRequired,
  }),
};

Recipe.defaultProps = {
  recipe: null,
};

// == Export
export default Recipe;
