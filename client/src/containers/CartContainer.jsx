import React from 'react';
import Cart from '../components/Cart';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { useStoreContext } from '../store';
import { startCart } from '../actions/actions';

const CartContainer = () => {
  const { cartID, setCartID, total, setTotal } = useStoreContext();
  return (
    <Paper elevation={3} className="cart">
      {cartID ? (
        <Cart id={cartID} setID={setCartID} total={total} setTotal={setTotal} />
      ) : (
        // "New cart" button if cart hasn't been initalized
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            startCart(setCartID).catch(err => {
              throw err;
            });
          }}
        >
          Start a Cart
        </Button>
      )}
    </Paper>
  );
};

export default CartContainer;
