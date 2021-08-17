import React from 'react';
import logo from 'src/assets/logo.png';
import Form from 'src/containers/Form';

import './style.scss';

const AppHeader = () => (
  <header className="header">
    <img src={logo} className="header-logo" alt="Logo oRecipes" />
    <Form />
  </header>
);

export default AppHeader;
