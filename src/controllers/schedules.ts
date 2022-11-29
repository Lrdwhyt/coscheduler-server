import { ParameterizedContext } from 'koa';
import { Schedule } from '../models/Schedule';
import {
    createSchedule,
    getSchedule,
    updateSchedule,
} from '../services/memory.db';

export const get = async (ctx: ParameterizedContext) => {
    const id: string = ctx.params.id;
    const schedule = getSchedule(id);
    if (schedule === undefined) {
        ctx.status = 404;
        ctx.message = "Schedule ID doesn't exist";
        return;
    }

    ctx.body = schedule;
};

export const update = async (ctx: ParameterizedContext) => {
    const scheduleChanges: Partial<Schedule> = JSON.parse(ctx.request.body);

    try {
        const updatedSchedule = updateSchedule(ctx.params.id, scheduleChanges);
        ctx.body = updatedSchedule;
    } catch (err) {
        ctx.status = 404;
        return;
    }
};

export const create = async (ctx: ParameterizedContext) => {
    const body = JSON.parse(ctx.request.body);
    const schedule: Schedule = {
        title: body.title,
        blockDuration: body.blockDuration,
        blockCount: body.blockCount,
        entries: {},
        startTime: body.startTime,
        levels: body.levels,
    };

    const id = createSchedule(schedule);

    ctx.body = schedule;
    ctx.set({
        Location: `${ctx.request.href}/${id}`,
    });
};
