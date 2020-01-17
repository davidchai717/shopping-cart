import React, { useEffect, useState } from 'react';
import { useStoreContext } from '../store';
import Item from '../components/Item';

const ItemContainer = () => {
  const { cartID } = useStoreContext();
  const [items, updateItems] = useState({
    items: {},
  });
  useEffect(() => {
    fetch('api/items')
      .then(res => res.json())
      .then(data => {
        updateItems(data);
        console.log(data);
      })
      .catch(err => {
        throw err;
      })
  }, []);
  return (<div id="item-container">
    <h2>Available Items:</h2>
    {Object.entries(items).map(([_, item], i) => {
      console.log(item);
      return <Item data={item} cartID={cartID} key={`item-${i}`} />
    })}
  </div>)
}

export default ItemContainer;