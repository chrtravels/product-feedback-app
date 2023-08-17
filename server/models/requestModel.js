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

exports.postRequest = (request) => {
  const {title, upvotes, status, description, category, upvoted} = request;
  const sql = 'INSERT INTO product_requests (title, upvotes, status, description, category, upvoted) VALUES ($1, $2, $3, $4, $5, $6)';
  const values = [title, upvotes, status, description, category, upvoted];
  return pool.query(sql, values);
}

exports.editRequest = (request) => {
  const {id, title, status, description, category} = request;
  const sql = 'UPDATE product_requests SET title = $1, status = $2, description = $3, category = $4 WHERE id = $5';
  const values = [title, status, description, category, id];
  return pool.query(sql, values);
}

exports.deleteRequest = (request) => {
  const sql = 'DELETE FROM product_requests WHERE id = $1';
  const value = [request.id]
  return pool.query(sql, value);
}

exports.postComment = (comment) => {
  const sql = 'INSERT INTO comments (request_id, comment_id, content, username, name, image, replying_to) VALUES ($1, $2, $3, $4, $5, $6, $7)';
  const values = [comment.request_id, comment.comment_id, comment.content, comment.username, comment.name, comment.image, comment.replying_to];
  return pool.query(sql, values);
}

exports.upVote = request => {
  const sql = 'UPDATE product_requests SET upvotes = $1, upvoted = $2 WHERE id = $3';
  const values = [request.upvotes, request.upvoted, request.id];
  return pool.query(sql, values);
}
