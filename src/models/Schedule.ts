import { Level } from './Level';

export interface Schedule {
    title: string;
    startTime: Date;
    blockDuration: number; // minutes
    blockCount: number;
    scale: Level[];
    entries: { [name: string]: number[] };
}
