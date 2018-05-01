const Koa = require('koa2');
const app = new Koa();

app.use((ctx)=>{
  ctx.response.body = 'Hello World';
});

app.listen(3000);
