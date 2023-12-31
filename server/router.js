const Router = require('koa-router');
const router = new Router();

const { getRequests, addRequest, editRequest, deleteRequest, upVote, addComment } = require('./controllers/request.controller');

router.get('/requests', getRequests);

router.post('/new-feedback', addRequest)

router.patch('/edit-feedback', editRequest)
router.delete('/edit-feedback/', deleteRequest);

router.post('/feedback-detail/comment', addComment)

router.put('/upvote', upVote)

module.exports = router;
