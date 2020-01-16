import React from 'react';
import TitleContainer from './TitleContainer';
import ItemContainer from './ItemContainer';
import CartContainer from './CartContainer';

const MainContainer = () => {
  return (<>
    <TitleContainer />
    <div id="main-screen">
      <ItemContainer />
      <CartContainer />
    </div>
  </>)
}

export default MainContainer;