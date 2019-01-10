'use strict'

const Koa         = require('koa')
const router      = require('koa-router');
const cors        = require('koa2-cors');
const bodyParser  = require('koa-bodyparser');

const app         = new Koa();

app.use(cors({origin: 'http://localhost:8080',})) // 跨域
app.use(bodyParser()); // 解析request的body
app.use(async (ctx,next) => {
  await next();
  ctx.body = '哔哩吧啦哔哩吧啦 粑粑拉粑粑';
})

app.listen(7001)