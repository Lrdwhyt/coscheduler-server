import { ParameterizedContext } from 'koa';

export const get = async (ctx: ParameterizedContext) => {
    ctx.status = 404;
    // get schedule
};

export const update = async (ctx: ParameterizedContext) => {
    // update schedule
};

export const create = async (ctx: ParameterizedContext) => {
    // create new schedule
};
