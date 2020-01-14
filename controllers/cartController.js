const items = require('../models/items');
const carts = [];

const cartController = {};

cartController.addCart = (req, res) => {
  // access from the store
  // create a new Cart entry
  const newCart = {};
  const cartID = carts.push(newCart) - 1;
  // push and return the new length as the ID
  return res.json(cartID);
};

cartController.verifyCartID = (req, res, next) => {
  // Check if user input is a valid index of the cart array
  const { cartID } = req.params;
  if (cartID < carts.length) {
    res.locals.cartID = cartID;
    return next();
  }
  return res.status(400).json({
    status: 'Invalid cart ID',
  });
}

cartController.verifyItemID = (req, res, next) => {
  // Check if user input is a valid ID
  console.log(req.body);
  if (req.body.itemID in items) {
    res.locals.itemID = req.body.itemID;
    return next();
  }
  return res.status(400).json({ status: 'Invalid item ID' });
}

cartController.addItem = (req, res) => {
  const { cartID, itemID } = res.locals;
  // add to the appropriate cart
  const desiredCart = carts[cartID];
  // initialize the count if it doesn't exist yet
  if (!(itemID in desiredCart)) desiredCart[itemID] = 0;
  desiredCart[itemID] += 1;
  return res.json({ status: `Item ${itemID} added successfully` });
}

cartController.getTotal = (req, res) => {
  const { cartID } = res.locals;
  let total = 0;
  // iterate through all the items on the cart
  const desiredCart = carts[cartID];
  for (const targetItem in desiredCart) {
    const itemCount = desiredCart[targetItem];
    const { unit_price, volume_discounts } = items[targetItem];
    // if item includes discounts, account for sale prices in the sum
    if (volume_discounts.length) {
      const { number, price } = volume_discounts[0];
      const remainder = itemCount % number;
      total += remainder * unit_price + (itemCount - remainder) / number * price;
    } else {
      total += itemCount * unit_price;
    }
  }
  return res.json({ status: 'Success', payload: total });
}

module.exports = cartController;