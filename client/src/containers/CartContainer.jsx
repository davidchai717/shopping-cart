import React from 'react';
import Cart from '../components/Cart';
import Button from '@material-ui/core/Button';
import { useStoreContext } from '../store';

const CartContainer = () => {
  const { cartID, setCartID, total } = useStoreContext();
  const startCart = update => {
    fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(id => {
        update(id);
      })
      .catch(err => {
        throw err;
      });
  };
  return (
    <div>
      {cartID ? (
        <Cart id={cartID} total={total} />
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            startCart(setCartID);
          }}
        >
          Start a Cart
        </Button>
      )}
    </div>
  );
};

export default CartContainer;
