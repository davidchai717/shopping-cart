import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const TitleContainer = () => {
  return (<AppBar position="relative">
    <Toolbar>
      <h1>Shopping Cart</h1>
    </Toolbar>
  </AppBar>)
}

export default TitleContainer;