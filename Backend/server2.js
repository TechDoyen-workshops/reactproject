const express = require('express');
const db = require('./db'); // Import the db.js file
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

/** POST Route (Create / Insert) **/
app.post('/', async (req, res) => {
  const { action, data } = req.body;

  try {
    let result;

    switch (action) {
      case 'registerUser':
        const { username, email, password } = data;
        const hashedPassword = await bcrypt.hash(password, 10);
        result = await db.registerUser(username, email, hashedPassword);
        return res.status(201).json({ message: 'User registered successfully', user: result });

      case 'addToCart':
        const { userId, productId, quantity } = data;
        result = await db.addToCart(userId, productId, quantity);
        return res.status(201).json({ message: 'Item added to cart', cartItem: result });

      case 'addOrder':
        const { totalAmount } = data;
        result = await db.addOrder(userId, totalAmount);
        return res.status(201).json({ message: 'Order placed', order: result });

      default:
        return res.status(400).json({ message: 'Invalid POST action' });
    }
  } catch (err) {
    console.error('Error in POST route:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

/** GET Route (Read / Select) **/
app.get('/', async (req, res) => {
  const { action, id } = req.query; // Assume the action and id are passed as query params

  try {
    let result;

    switch (action) {
      case 'getUserByEmail':
        result = await db.getUserByEmail(id); // `id` here represents the email
        if (result) {
          return res.json(result);
        } else {
          return res.status(404).json({ message: 'User not found' });
        }

      case 'getCartItems':
        result = await db.getCartItems(id); // `id` represents the userId
        return res.json(result);

      case 'getUserOrders':
        result = await db.getUserOrders(id); // `id` represents the userId
        return res.json(result);

      default:
        return res.status(400).json({ message: 'Invalid GET action' });
    }
  } catch (err) {
    console.error('Error in GET route:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

/** PUT Route (Update) **/
app.put('/', async (req, res) => {
  const { action, id, data } = req.body;

  try {
    let result;

    switch (action) {
      case 'updateUser':
        const { email, username, password } = data;
        const hashedPassword = await bcrypt.hash(password, 10);
        result = await db.updateUser(id, email, username, hashedPassword); // `id` represents the userId
        return res.json(result);

      case 'updateCartItem':
        const { quantity } = data;
        result = await db.updateCartItem(id, quantity); // `id` represents the cartId
        return res.json(result);

      default:
        return res.status(400).json({ message: 'Invalid PUT action' });
    }
  } catch (err) {
    console.error('Error in PUT route:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

/** DELETE Route **/
app.delete('/', async (req, res) => {
  const { action, id } = req.query; // Assume the action and id are passed as query params

  try {
    let result;

    switch (action) {
      case 'deleteUser':
        result = await db.deleteUser(id); // `id` represents the userId
        return res.json({ message: 'User deleted', user: result });

      case 'deleteCartItem':
        result = await db.deleteCartItem(id); // `id` represents the cartId
        return res.json({ message: 'Cart item deleted', cartItem: result });

      case 'deleteOrder':
        result = await db.deleteOrder(id); // `id` represents the orderId
        return res.json({ message: 'Order deleted', order: result });

      default:
        return res.status(400).json({ message: 'Invalid DELETE action' });
    }
  } catch (err) {
    console.error('Error in DELETE route:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
