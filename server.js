const express = require('express');
const app = express();
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

// Public-facing APIs
app.get('/api/items', getItems);

app.post('/api/cart', addCart);

app.get('/api/cart/:cartID', verifyCartID, getTotal);

app.patch('/api/cart/:cartID', verifyCartID, verifyItemID, addItem);

const server = app.listen(3000);

module.exports = { app, server };
