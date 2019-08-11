import { Npc, Entity } from './';
import { LocationProperties } from './interfaces';
import { BaseStore } from './stores/Base.store';
export declare class Location {
    readonly name: string;
    readonly id: string;
    readonly description: string;
    readonly image: string;
    entities: BaseStore<Npc | Entity>;
    private _coords;
    constructor(options: LocationProperties);
    readonly coords: [number, number];
    setCoords(x: number, y: number): void;
}
