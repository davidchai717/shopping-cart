import React, { useState } from 'react';
import MainContainer from './containers/MainContainer';
import { Store } from './store';

const App = () => {
  // Simple top-level state setup
  const [cartID, setCartID] = useState(null);
  const [total, setTotal] = useState(0);
  // Async action that helps update the total value
  const fetchTotal = id => {
    fetch(`/api/cart/${id}`)
      .then(res => res.json())
      .then(({ payload }) => {
        setTotal(payload);
      });
  };
  return (
    <Store.Provider value={{ cartID, setCartID, total, setTotal, fetchTotal }}>
      <MainContainer />
    </Store.Provider>
  );
};

export default App;
