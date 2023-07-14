const pool = require('../db');

exports.getAll = async () => {
  const requests = await pool.query('SELECT * FROM product_requests');
  const requestComments = await pool.query('SELECT * FROM comments');

  if (requests.rows.length > 0) {
    requests.rows.forEach((request) => {
      request.comments = [];

      requestComments.rows.forEach((comment) => {
        if (request.id === comment.request_id) {
          request.comments.push(comment);
        }
      })
    })
  }

  return requests.rows;
}

exports.postRequest = request => {
  const sql = 'INSERT INTO product_requests';
}
