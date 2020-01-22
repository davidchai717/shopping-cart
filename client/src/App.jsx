import React, { useState, useEffect } from 'react';
import ls from 'local-storage';
import MainContainer from './containers/MainContainer';
import { Store } from './store';
import { fetchTotal } from './actions/actions';

const App = () => {
  // Top-level setup for shared state
  const [cartID, setCartID] = useState(null);
  const [total, setTotal] = useState(0);
  // Checking if the ID is cached in the local storage
  useEffect(() => {
    const localID = ls('shopping-cart-id');
    // If so, restore the cart and the total amount
    if (localID) {
      fetchTotal(localID)
        .then(({ payload }) => {
          setCartID(localID);
          setTotal(payload);
        })
        .catch(err => {
          throw err;
        });
    }
  }, []);
  return (
    <Store.Provider value={{ cartID, setCartID, total, setTotal, fetchTotal }}>
      <MainContainer />
    </Store.Provider>
  );
};

export default App;
