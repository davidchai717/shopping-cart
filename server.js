const express = require('express');
const app = express();
const cartController = require('./controllers/cartController');
const { addCart, getItems, addItem } = cartController;

app.post('/cart', addCart);

app.get('/cart/:id', getItems);

app.post('/cart/:id', addItem);