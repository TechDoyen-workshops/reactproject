const express = require("express");
const db = require("./db"); // Import the db.js file
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors")

const app = express();
const port = 3001;

const accessTokenSecret = "accessSecret123";
const refreshTokenSecret = "refreshSecret456";
let refreshTokens = []; // Temporary storage for refresh tokens

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

function generateAccessToken(user) {
  return jwt.sign({ id: user.id, email: user.email }, accessTokenSecret, {
    expiresIn: "15m",
  });
}

function generateRefreshToken(user) {
  return jwt.sign({ id: user.id, email: user.email }, refreshTokenSecret, {
    expiresIn: "7d",
  });
}

app.get('/test', (req, res) => {
  res.status(200).send('Test route is working!');
});

// POST: Register a new user
app.post("/auth", async (req, res) => {
  const { action, username, email, password, refreshToken } = req.body;

  try {
    switch (action) {
      case "register":
        // Register a new user
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await db.registerUser(username, email, hashedPassword);
        return res.status(201).json({ message: "User registered successfully", user: result });

        case "login":
          // Log in a user
          const user = await db.getUserByEmail(email);
          if (!user) {
            return res.status(404).json({ message: "User not found" });
          }
        
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
          }
        
          // Generate tokens
          const accessToken = generateAccessToken(user);
          const newRefreshToken = generateRefreshToken(user);
        
          // Save refresh token (in production, store this in a database)
          refreshTokens.push(newRefreshToken);
        
         
        
          // Send tokens to the user
          return res.json({
            message: "Login successful",
            accessToken,
            refreshToken: newRefreshToken,
          });
        

      case "token":
        // Refresh access token
        if (!refreshToken) {
          return res.status(401).json({ message: "Refresh token required" });
        }

        if (!refreshTokens.includes(refreshToken)) {
          return res.status(403).json({ message: "Invalid refresh token" });
        }

        // Verify the refresh token
        jwt.verify(refreshToken, refreshTokenSecret, (err, user) => {
          if (err) {
            return res.status(403).json({ message: "Invalid token" });
          }

          // Generate a new access token
          const newAccessToken = generateAccessToken({ id: user.id, email: user.email });
          return res.json({ accessToken: newAccessToken });
        });
        break;

      case "logout":
        // Log out (invalidate refresh token)
        if (!refreshToken) {
          return res.status(401).json({ message: "Refresh token required" });
        }

        refreshTokens = refreshTokens.filter(token => token !== refreshToken);
        return res.json({ message: "Logged out successfully" });

      default:
        return res.status(400).json({ message: "Invalid action" });
    }
  } catch (err) {
    console.error("Error in POST route:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET: Get user by ID
app.get("/selectuser/:id", async (req, res) => {
  const { id } = req.params; // Assume the user ID is passed as a query param
  try {
    // Fetch user by ID from the database
    const result = await db.getUserById(id); // `id` represents the userId
    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return the user data as a response
    return res.json(result);
  } catch (err) {
    console.error("Error in GET route:", err);
    res.status(500).json({ error: "Server error" });
  }
});


// PUT: Update user by ID
app.put("/updateuser/:id", async (req, res) => {
  const { id } = req.params;
  const { email, username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const updatedUser = await db.updateUserByID(
      id,
      email,
      username,
      hashedPassword
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found or not updated" });
    }
    res.status(200).json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE: Delete user by ID
app.delete("/deleteuser/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await db.deleteUserByID(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found or not deleted" });
    }
    res.status(200).json({
      message: "User deleted successfully",
      user: deletedUser,
    });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ error: "Server error" });
  }
});


// Middleware to authenticate access token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: "Token required" });

  jwt.verify(token, accessTokenSecret, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });

    req.user = user;  // Attach the user to the request
    next();
  });
}

// Example protected route
app.get("/dashboard", authenticateToken, (req, res) => {
  res.json({ message: "Welcome to the dashboard", user: req.user });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
