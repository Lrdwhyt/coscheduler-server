import * as Koa from 'koa';
import * as Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
    console.log('get /');
    ctx.body = 'GET ALL';
});

router.get('/schedules/:id', async (ctx) => {
    // return schedule json
    ctx.status = 404;
});

router.post('/schedules', async (ctx) => {
    // add new schedule
});

router.patch('/schedules/:id', async (ctx) => {
    // update schedule (replace participant)
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
