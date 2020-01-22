// Reducing the boilerplate for the async actions
const fetcher = (url, method, body) => {
  const obj = {
    method: method,
  };
  if (body) {
    obj.headers = {
      'Content-Type': 'application/json',
    };
    obj.body = JSON.stringify(body);
  }
  return fetch(url, obj).then(res => {
    if (res.status === 200) {
      return res.json();
    } else {
      // Global error handling for API calls
      throw new Error('Server connection issues');
    }
  });
};

export const startCart = update => {
  return fetcher('/api/cart', 'POST', {
    'Content-Type': 'application/json',
  }).then(({ payload }) => {
    update(payload);
  });
};

export const fetchItems = update => {
  return fetcher('api/items', 'GET').then(items => {
    update(items);
  });
};

// helper for addItem
export const fetchTotal = id => {
  return fetcher(`/api/cart/${id}`, 'GET');
};

export const addItem = (cartID, itemID, update) => {
  return fetcher(`/api/cart/${cartID}`, 'PATCH', { itemID }).then(_ => {
    fetchTotal(cartID).then(({ payload }) => {
      update(payload);
    });
  });
};
