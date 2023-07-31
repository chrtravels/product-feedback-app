const Router = require('koa-router');
const router = new Router();

const { getRequests, addRequest, deleteRequest, upVote } = require('./controllers/request.controller');

router.get('/requests', getRequests);

router.post('/new-feedback', addRequest)

router.delete('/edit-feedback/', deleteRequest);

router.put('/upvote', upVote)

module.exports = router;
