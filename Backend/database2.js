const { Client } = require('pg');

// PostgreSQL client setup
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'your_username',
  password: 'your_password',
  database: 'your_database',
});

// Connect to PostgreSQL
client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

/** Insert Queries **/

// Register new user query
async function registerUser(username, email, hashedPassword) {
  const result = await client.query(
    'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
    [username, email, hashedPassword]
  );
  return result.rows[0];
}

// Add item to cart query
async function addToCart(userId, productId, quantity) {
  const result = await client.query(
    'INSERT INTO cart (user_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *',
    [userId, productId, quantity]
  );
  return result.rows[0];
}

// Insert order query
async function addOrder(userId, totalAmount) {
  const result = await client.query(
    'INSERT INTO orders (user_id, total_amount) VALUES ($1, $2) RETURNING *',
    [userId, totalAmount]
  );
  return result.rows[0];
}

/** Select Queries **/

// Get user by email query
async function getUserByEmail(email) {
  const result = await client.query('SELECT * FROM users WHERE email = $1', [email]);
  return result.rows[0];
}

// Get all cart items for a user
async function getCartItems(userId) {
  const result = await client.query('SELECT * FROM cart WHERE user_id = $1', [userId]);
  return result.rows;
}

// Get all orders for a user
async function getUserOrders(userId) {
  const result = await client.query('SELECT * FROM orders WHERE user_id = $1', [userId]);
  return result.rows;
}

/** Update Queries **/

// Update user details by userId
async function updateUser(userId, email, username, password) {
  const result = await client.query(
    'UPDATE users SET email = $1, username = $2, password = $3 WHERE id = $4 RETURNING *',
    [email, username, password, userId]
  );
  return result.rows[0];
}

// Update cart item quantity by cartId
async function updateCartItem(cartId, quantity) {
  const result = await client.query(
    'UPDATE cart SET quantity = $1 WHERE id = $2 RETURNING *',
    [quantity, cartId]
  );
  return result.rows[0];
}

/** Delete Queries **/

// Delete user by userId
async function deleteUser(userId) {
  const result = await client.query(
    'DELETE FROM users WHERE id = $1 RETURNING *',
    [userId]
  );
  return result.rows[0];
}

// Delete cart item by cartId
async function deleteCartItem(cartId) {
  const result = await client.query(
    'DELETE FROM cart WHERE id = $1 RETURNING *',
    [cartId]
  );
  return result.rows[0];
}

// Delete order by orderId
async function deleteOrder(orderId) {
  const result = await client.query(
    'DELETE FROM orders WHERE id = $1 RETURNING *',
    [orderId]
  );
  return result.rows[0];
}

module.exports = {
  registerUser,
  addToCart,
  addOrder,
  getUserByEmail,
  getCartItems,
  getUserOrders,
  updateUser,
  updateCartItem,
  deleteUser,
  deleteCartItem,
  deleteOrder
};
