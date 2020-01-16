const express = require('express');
const app = express();
const cartController = require('./controllers/cartController');
const { verifyCartID, verifyItemID, addCart, addItem, getTotal } = cartController;

app.use(express.json())

app.post('/cart', addCart);

app.get('/cart/:cartID', verifyCartID, getTotal);

app.patch('/cart/:cartID', verifyCartID, verifyItemID, addItem);

app.listen(3000);