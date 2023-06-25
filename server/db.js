const { Pool } = require('pg');

const connectionString = "postgresql://postgres:d3W1jyZATGYnSaouONTe@containers-us-west-170.railway.app:7784/railway";

const pool = new Pool({
  connectionString,
});

module.exports = pool;
