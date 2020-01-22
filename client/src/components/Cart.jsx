import React from 'react';
import Button from '@material-ui/core/Button';
import ls from 'local-storage';

const Cart = ({ setID, total, setTotal }) => {
  return (
    <>
      <h4>Total Price</h4>
      <h2>${total.toFixed(2)}</h2>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setID(null);
          setTotal(0);
          ls.remove('shopping-cart-id');
        }}
      >
        Clear Cart
      </Button>
    </>
  );
};

export default Cart;
