import React from 'react';
import Cart from '../components/Cart';
import Button from '@material-ui/core/Button';
import { useStoreContext } from '../store';

const CartContainer = () => {
  const { cartID } = useStoreContext();
  return (<div>
    { cartID ? <Cart id={cartID} /> : <Button variant="contained" color="primary">
  Start a Cart
</Button>}
  </div>)
}

export default CartContainer;