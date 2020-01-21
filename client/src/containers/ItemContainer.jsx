import React, { useEffect, useState } from 'react';
import { useStoreContext } from '../store';
import Item from '../components/Item';
import { fetchItems, addItem } from '../actions/actions';

const ItemContainer = () => {
  const { cartID, fetchTotal, setTotal } = useStoreContext();
  const [items, updateItems] = useState({});
  // Retrieve items upon first mount
  useEffect(() => {
    fetchItems(updateItems).catch(err => {
      throw err;
    });
  }, []);

  return (
    <div id="item-container">
      <h2>Available Items:</h2>
      {Object.entries(items).map(([itemID, item], i) => {
        return (
          <Item
            data={{ ...item, itemID, cartID }}
            addItem={addItem}
            setTotal={setTotal}
            key={`item-${i}`}
          />
        );
      })}
    </div>
  );
};

export default ItemContainer;
