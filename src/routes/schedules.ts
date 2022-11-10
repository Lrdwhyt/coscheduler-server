import * as Router from 'koa-router';

import { get, update, create } from '../controllers/schedules';

const router = new Router({
    prefix: '/schedules',
});

router.get('/:id', get);
router.post('/', create);
router.patch('/:id', update);

export default router;
