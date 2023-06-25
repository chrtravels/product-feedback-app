const Router = require('koa-router');
const router = new Router();

const { getRequests, postRequest } = require('./controllers/request.controller');

router.get('/requests', getRequests);

module.exports = router;
