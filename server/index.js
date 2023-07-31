const Koa = require('koa');
const app = new Koa();
const cors = require('koa-cors');
const router = require('./router');
const bodyParser = require('koa-bodyparser');
const { HOST } = require('./config')
const { PORT } = require('./config');


app.use(bodyParser());

// const origin = 'http://localhost:4200';

// app.use(cors({origin: 'http://127.0.0.1:4200/'}));
app.use(cors());
app.use(router.routes());

// app.use(async (ctx, next) => {
//   ctx.set('Access-Control-Allow-Origin', '*');
//   ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
//   await next();
// });

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(PORT, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
})
