const Order = require('../../models/order');


module.exports = {
  cart,
  addToCart,
  setMakeupQtyInCart,
  checkout,
  getAllForUser
};

async function getAllForUser(req, res) {
  const orders = await Order.find({user: req.user._id, isPaid: true}).sort('-updatedAt');
  res.json(orders);
}

// A cart is the unpaid order for a user
async function cart(req, res) {
  const cart = await Order.getCart(req.user._id);
  res.json(cart);
}

// Add an Makeup to the cart
async function addToCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.addMakeupToCart(req.params.id);
  res.json(cart);
}

// Updates an makeup's qty in the cart
async function setMakeupQtyInCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.setMakeupQty(req.body.makeupId, req.body.newQty);
  res.json(cart);
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
  const cart = await Order.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save();
  res.json(cart);
}
