import React, { useState } from 'react';
import MainContainer from './containers/MainContainer';
import { Store } from './store';

const App = () => {
  // Simple top-level state setup
  const [cartID, setCartID] = useState(null);
  return (<Store.Provider value={ cartID, setCartID }>
    <MainContainer />
  </Store.Provider>);
}

export default App;