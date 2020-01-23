const express = require('express');
const app = express();
const path = require('path');
const cartController = require('./controllers/cartController');
const itemController = require('./controllers/itemController');

const {
  verifyCartID,
  verifyItemID,
  addCart,
  addItem,
  getTotal,
} = cartController;
const { getItems } = itemController;

app.use(express.json());

// Serving static frontend files in production mode
if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.resolve(__dirname, './client/public/')));
  app.use('/dist', express.static(path.resolve(__dirname, './client/dist/')));
}

// Public-facing APIs
app.get('/api/items', getItems);

app.post('/api/cart', addCart);

app.get('/api/cart/:cartID', verifyCartID, getTotal);

app.patch('/api/cart/:cartID', verifyCartID, verifyItemID, addItem);

const server = app.listen(8081, () => {
  console.log('Server established on port 8081');
});

module.exports = { app, server };
