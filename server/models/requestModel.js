const pool = require('../db');

exports.getAll = async () => {
  const response = await pool.query('SELECT * FROM product_requests');
  return response.rows;
}

exports.postRequest = request => {
  const sql = 'INSERT INTO product_requests';
}
