import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Item = ({
  data: { description, unit_price, volume_discounts },
  itemID,
  cartID,
  addItem,
  fetchTotal,
}) => {
  return (
    <Paper elevation={3} className="item">
      <div className="item-description">
        <p>
          <strong>{description}</strong> - ${unit_price}
        </p>
      </div>
      {cartID ? (
        <ButtonGroup className="item-actions">
          <Button
            onClick={() => {
              addItem(cartID, itemID, fetchTotal);
            }}
          >
            +
          </Button>
        </ButtonGroup>
      ) : null}
    </Paper>
  );
};

export default Item;
