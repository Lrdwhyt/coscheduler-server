export interface Schedule {
    title: string;
    startTime: Date;
    blockDuration: number; // minutes
    blockCount: number;
    levels: string[];
    entries: { [name: string]: number[] };
}
