import * as Router from 'koa-router';

import scheduleRouter from './schedules';

const router = new Router();
router.use(scheduleRouter.routes(), scheduleRouter.allowedMethods());

export default router;
