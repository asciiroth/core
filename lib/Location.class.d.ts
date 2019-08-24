import { Npc, Entity, Zone } from './';
import { LocationProperties, WarpPoint, CustomDirection } from './interfaces';
export declare class Location {
    readonly name: string;
    readonly id: string;
    readonly description: string;
    readonly image: string;
    private _entities;
    private _coords;
    private _custom;
    private _warpPoints;
    private _customDirections;
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
    addWarpPoint(warpPoint: WarpPoint): void;
    addCustomDirection(customDirection: CustomDirection): void;
    readonly warpPoints: {
        [key: string]: WarpPoint;
    };
    readonly customDirections: {
        [key: string]: {
            zone?: Zone;
            location: Location;
        };
    };
}
