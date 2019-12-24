const fs = require('fs');
const path = require('path');
const items = fs.readFileSync(path.resolve(__dirname, '../models/items.json'));

console.log(JSON.parse(items));

module.exports = {
  addCart: {
    // access from the store
    // create a new Cart entry
    // return cart ID
  },
  getItems: {
  },
  addItem: {

  },
}