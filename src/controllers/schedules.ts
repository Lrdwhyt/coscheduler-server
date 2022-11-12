import { ParameterizedContext } from 'koa';
import { Schedule } from '../models/Schedule';
import { createSchedule, getSchedule } from '../services/memory.db';

export const get = async (ctx: ParameterizedContext) => {
    const id: string = ctx.params.id;
    const schedule = getSchedule(id);
    if (schedule === undefined) {
        ctx.status = 404;
        return;
    }

    ctx.body = schedule;
};

export const update = async (ctx: ParameterizedContext) => {
    // update schedule
};

export const create = async (ctx: ParameterizedContext) => {
    // create new schedule
    const schedule: Schedule = {
        title: ctx.request.body.title,
        blockDuration: ctx.request.body.blockDuration,
        blockCount: ctx.request.body.blockCount,
        entries: {},
        startTime: ctx.request.body.startTime,
        scale: ctx.request.body.scale,
    };

    const id = createSchedule(schedule);

    ctx.body = schedule;
    ctx.set({
        Location: `${ctx.request.href}/${id}`,
    });
};
