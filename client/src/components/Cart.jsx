import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const Cart = ({ id, total }) => {
  return (
    <Paper elevation={3} className="cart">
      <h4>Total Price</h4>
      <h2>${total}</h2>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          console.log('to be worked on');
        }}
      >
        Clear Cart
      </Button>
    </Paper>
  );
};

export default Cart;
