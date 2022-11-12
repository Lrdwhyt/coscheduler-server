import * as Router from '@koa/router';
import { koaBody } from 'koa-body';

import { get, update, create } from '../controllers/schedules';

const router = new Router({
    prefix: '/schedules',
});

router.get('/:id', get);
router.post('/', koaBody(), create);
router.patch('/:id', koaBody(), update);

export default router;
