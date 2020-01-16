import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Item = ({ title, price, discount }) => {
  return (<Paper elevation={3} className="item">
   <div className="item-description">
      <p><strong>Apple</strong> - $4</p>
   </div>
    <ButtonGroup className="item-actions">
      <Button>+</Button>
      <Button>-</Button>
    </ButtonGroup>
  </Paper>)
}

export default Item;