const items = require('../models/items');

const itemController = {};

itemController.getItems = (req, res) => {
  // return the items
  return res.json(items);
};

module.exports = itemController;
