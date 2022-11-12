import { Schedule } from '../models/Schedule';
import { generateUniqueId } from '../utilities/uniqueIdGenerator';

const schedules = new Map<string, Schedule>();

export const createSchedule = (schedule: Schedule) => {
    const id = generateUniqueId(schedules);
    schedules.set(id, schedule);

    return id;
};

export const updateSchedule = (id: string, schedule: Partial<Schedule>) => {};

export const getSchedule = (id: string) => {
    return schedules.get(id);
};
