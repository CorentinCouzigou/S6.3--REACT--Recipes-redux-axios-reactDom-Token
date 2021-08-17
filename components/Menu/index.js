import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Menu = ({ recipes }) => (
  <nav className="menu">
    <NavLink
      className="menu-link "
      to="/"
      exact
      activeClassName="menu-link--active"
    >
      Accueil
    </NavLink>
    {recipes.map((recipe) => (
      <NavLink
        key={recipe.id}
        className="menu-link"
        to={`/recipe/${recipe.slug}`}
        exact
        activeClassName="menu-link--active"
      >
        {recipe.title}
      </NavLink>
    ))}
  </nav>
);

Menu.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Menu;
