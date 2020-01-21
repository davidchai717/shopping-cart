import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Item = ({
  data: { description, unit_price, volume_discounts, itemID, cartID },
  addItem,
  setTotal,
}) => {
  return (
    <Paper elevation={3} className="item">
      <div className="item-description">
        <p>
          <strong>{description}</strong> - ${unit_price.toFixed(2)}
        </p>
        {volume_discounts.length ? (
          <p className="highlight">
            Special: Get {volume_discounts[0].number} for just $
            {volume_discounts[0].price}
          </p>
        ) : null}
      </div>
      {cartID ? (
        <ButtonGroup className="item-actions">
          <Button
            onClick={() => {
              addItem(cartID, itemID, setTotal).catch(err => {
                throw err;
              });
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
