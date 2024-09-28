const { Client } = require('pg');

// PostgreSQL client setup
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

// Register new user query
async function registerUser(id, email, username, password) {
  const result = await client.query(
    "INSERT INTO userlogin (id, email, username, password) VALUES ($1, $2, $3, $4) RETURNING *",
    [id, email, username, password]
  );
  return result.rows[0];
}

// Get user by id query
async function getUserById(id) {
  const result = await client.query('SELECT email , username , password  FROM userlogin WHERE id = $1 ', [id]);
  return result.rows[0];
}

// update the user by id query
async function updateUserByID(id) {
  const result = await client.query(
    'UPDATE userlogin SET email = $1, username = $2, password = $3 WHERE id = $4 ',
    [id]
  );
  return result.rows[0];
}

// delete the user by id query
async function deleteUserByID(id) {
    const result = await client.query(
      'DELETE from  userlogin   WHERE id = $1 RETURNING *',
      [id]
    );
    return result.rows[0];
  }
  



module.exports = {
  registerUser,
  getUserById,
  updateUserByID,
  deleteUserByID
};