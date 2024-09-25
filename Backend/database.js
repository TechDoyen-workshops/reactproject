const { Client } = require("pg");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

// Create a new instance of the Client
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "shanu",
  port: 5432,
});

// Connect to the database
client.connect((err) => {
  if (err) {
    console.log("Connection error", err.stack);
  } else {
    console.log("Connected to the database");
  }
});

// Define the POST route to add a user
app.post("/adduser", (req, res) => {

  const {id, email, username, password } = req.body;
  const query = "INSERT INTO userlogin (id, email, username, password) VALUES ($1, $2, $3, $4) RETURNING *";
  const values = [id, email, username, password];

  // Perform the database insertion
  client
    .query(query, values)
    .then((result) => {
      console.log("Insertion completed"); // Show insertion completed in the console
      res.status(200).json(result.rows[0]); // Send the inserted user as the response
    })
    .catch((err) => {
      console.error("Error inserting user:", err.stack);
      res.status(500).send("Error inserting data");
    });
});

// Define the GET route to get all users
app.get("/getuser/:id", (req, res) => {
  
  const { id } = req.params;
  const query = "SELECT email , username , password  FROM userlogin WHERE id = $1 "; // Query to select all users
  const values = [ id];

  client
.query(query,values)
    .then((result) => {
      console.log(result.rows); // Log all users
      res.status(200).json(result.rows); // Send all users as the response
    })
    .catch((err) => {
      console.error(err.stack);
      res.status(500).send("Error retrieving users");
    });
});


// Define the update route to get all users
app.put("/updateuser/:id", (req, res) => {
  const { id } = req.params; // Get the user ID from the URL parameters
  const { email, username, password } = req.body; // Get user details from request body

  const query =
    "UPDATE userlogin SET email = $1, username = $2, password = $3 WHERE id = $4 RETURNING *";

  const values = [email, username, password, id]; // Add user ID to the values array

  client
    .query(query, values)
    .then((result) => {
      if (result.rows.length > 0) {
        console.log("User updated successfully", result.rows[0]); // Log the updated user
        res.status(200).json(result.rows[0]); // Send the updated user as the response
      } else {
        res.status(404).send("User not found"); // Handle case where user ID does not exist
      }
    })
    .catch((err) => {
      console.error(err.stack);
      res.status(500).send("Error updating user");
    });
});


// Define the delete route to get all users
app.delete("/deleteuser/:id", (req, res) => {
  const { id } = req.params; // Get the user ID from the URL parameters
  
  const query =
    "DELETE from  userlogin   WHERE id = $1 RETURNING *";

  const values = [ id]; // Add user ID to the values array

  client
    .query(query, values)
    .then((result) => {
      if (result.rows.length > 0) {
        console.log("Deleted User successfully", result.rows[0]); // Log the updated user
        res.status(200).json(result.rows[0]); // Send the updated user as the response
      } else {
        res.status(404).send("User not found"); // Handle case where user ID does not exist
      }
    })
    .catch((err) => {
      console.error(err.stack);
      res.status(500).send("Deletion failed");
    });
});



// Start the server
app.listen(3001, () => {
  console.log(`Server is running on http://localhost:3001`);
});
