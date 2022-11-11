import { randomBytes } from 'crypto';
import { Schedule } from '../models/Schedule';

export const generateUniqueId = (map: Map<string, Schedule>) => {
    let id: string;
    do {
        id = generateId();
    } while (map.has(id));

    return id;
};

const generateId = () => {
    return randomBytes(4).toString('hex');
};
