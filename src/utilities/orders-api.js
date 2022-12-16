import sendRequest from './send-request';

const BASE_URL = '/api/orders';

// Retrieve an unpaid order for the logged in user
export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

// Add an makeup to the cart
export function addMakeupToCart(makeupId) {
  // Just send makeupId for best security (no pricing)
  return sendRequest(`${BASE_URL}/cart/makeup/${makeupId}`, 'POST');
}

// Update the makeup's qty in the cart
// Will add the makeup to the order if not currently in the cart
// Sending info via the data payload instead of a long URL
export function setMakeupQtyInCart(makeupId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { makeupId, newQty });
}

// Updates the order's (cart's) isPaid property to true
export function checkout() {
  // Changing data on the server, so make it a POST request
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

// Fetches all order for the logged in user
export function getAllForUser() {
  return sendRequest(`${BASE_URL}`);
}