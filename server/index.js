const Koa = require('koa');
const app = new Koa();
const cors = require('@koa/cors');
const router = require('./router');
const bodyParser = require('koa-bodyparser');
const { HOST } = require('./config')
const { PORT } = require('./config');

app.use(bodyParser());

// app.use(cors({origin: '*'}));
app.use(cors());
app.use(router.routes());

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(PORT, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
})
