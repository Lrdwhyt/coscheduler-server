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

    ctx.response.body = schedule;
};

export const update = async (ctx: ParameterizedContext) => {
    // update schedule
};

export const create = async (ctx: ParameterizedContext) => {
    // create new schedule
    const schedule: Schedule = {
        title: '',
        blockDuration: 1,
        blockCount: 1,
        entries: {},
        startTime: new Date(),
        scale: [],
    };

    const id = createSchedule(schedule);
};
