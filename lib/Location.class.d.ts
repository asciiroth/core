import { Npc, Entity } from './';
import { LocationProperties } from './interfaces';
export declare class Location {
    readonly name: string;
    readonly id: string;
    readonly description: string;
    readonly image: string;
    private _entities;
    private _coords;
    private _custom;
    constructor(options: LocationProperties);
    readonly coords: [number, number];
    setCoords(x: number, y: number): void;
    find(name: string): Npc | Entity;
    readonly entities: (Npc | Entity)[];
    readonly custom: {
        [id: string]: any;
    };
    addCustom(customProperties: {
        [id: string]: any;
    }): void;
}
