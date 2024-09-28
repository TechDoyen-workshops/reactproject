const express = require('express');
const db = require('./db'); // Import the db.js file

const app = express();
const port = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// POST: Register a new user
app.post('/adduser', async (req, res) => {
  const { id, email, username, password } = req.body;

  try {
    const newUser = await db.registerUser(id, email, username, password);
    res.status(201).json({
      message: 'User registered successfully',
      user: newUser,
    });
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET: Get user by ID
app.get('/getuser/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await db.getUserById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error('Error retrieving user:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT: Update user by ID
app.put('/updateuser/:id', async (req, res) => {
  const { id } = req.params;
  const { email, username, password } = req.body;

  try {
    const updatedUser = await db.updateUserByID(id, email, username, password);
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found or not updated' });
    }
    res.status(200).json({
      message: 'User updated successfully',
      user: updatedUser,
    });
  } catch (err) {
    console.error('Error updating user:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE: Delete user by ID
app.delete('/deleteuser/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await db.deleteUserByID(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found or not deleted' });
    }
    res.status(200).json({
      message: 'User deleted successfully',
      user: deletedUser,
    });
  } catch (err) {
    console.error('Error deleting user:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
