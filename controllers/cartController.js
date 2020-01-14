const fs = require('fs');
const path = require('path');
const items = require('../models/items');

const Cart = require('../models/cart');
const carts = [];

module.exports = {
  addCart: function () {
    // access from the store
    // create a new Cart entry
    const newCart = new Cart();
    // push and return the new length as the ID
    return carts.push(newCart);
  },
  getItems: {
  },
  addItem: {

  },
}