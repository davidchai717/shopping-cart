import React, { useState } from 'react';
import MainContainer from './containers/MainContainer';
import { Store } from './store';
import { fetchTotal } from './actions/actions';

const App = () => {
  // Simple top-level state setup
  const [cartID, setCartID] = useState(null);
  const [total, setTotal] = useState(0);
  return (
    <Store.Provider value={{ cartID, setCartID, total, setTotal, fetchTotal }}>
      <MainContainer />
    </Store.Provider>
  );
};

export default App;
