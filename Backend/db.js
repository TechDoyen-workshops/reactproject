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
async function registerUser(username, email, hashedPassword, DOB, phone) {
  const result = await client.query(
    'INSERT INTO registration (username, email, password, DOB, phone) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [username, email, hashedPassword, DOB, phone]
  );
  return result.rows[0];
}

// Get user by id query


async function getUserById(id) {
  const result = await client.query('SELECT email , username , password , DOB, phone FROM registration WHERE id = $1 ', [id]);
  return result.rows[0];
}

// Get user by email for login
async function getUserByEmail(email) {
  const result = await client.query('SELECT * FROM registration WHERE email = $1', [email]);
  return result.rows[0];
}

// update the user by id query
async function updateUserByID(username, dob, number, email) {
  const result = await client.query(
    'UPDATE registration SET username = $1, dob = $2, number = $3 WHERE email = $4 RETURNING *',
    [username, dob, number, email]  // Pass all parameters correctly
  );
  return result.rows[0];
}


// delete the user by id query
async function deleteUserByID(id) {
    const result = await client.query(
      'DELETE from  registration   WHERE id = $1 RETURNING *',
      [id]
    );
    return result.rows[0];
  }
  



module.exports = {
  registerUser,
  getUserByEmail,
  getUserById,
  updateUserByID,
  deleteUserByID
};