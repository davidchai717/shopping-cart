import React, { useEffect, useState } from 'react';
import { useStoreContext } from '../store';
import Item from '../components/Item';

const ItemContainer = () => {
  const { cartID, fetchTotal } = useStoreContext();
  const [items, updateItems] = useState({});
  // Retrieve items upon first mount
  useEffect(() => {
    fetch('api/items')
      .then(res => res.json())
      .then(data => {
        updateItems(data);
      })
      .catch(err => {
        throw err;
      });
  }, []);

  const addItem = (cartID, itemID, update) => {
    fetch(`/api/cart/${cartID}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        itemID,
      }),
    })
      .then(res => {
        // return res.json();
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error('Server call error');
        }
      })
      .then(_ => {
        console.log(_);
        update(cartID);
      })
      .catch(err => {
        throw err;
      });
  };
  return (
    <div id="item-container">
      <h2>Available Items:</h2>
      {Object.entries(items).map(([itemID, item], i) => {
        console.log(itemID);
        return (
          <Item
            data={item}
            itemID={itemID}
            cartID={cartID}
            addItem={addItem}
            fetchTotal={fetchTotal}
            key={`item-${i}`}
          />
        );
      })}
    </div>
  );
};

export default ItemContainer;
