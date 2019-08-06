import { Zone } from './';
import { ZoneProperties } from './interfaces';
export declare class World {
    private name;
    private _zones;
    constructor(name: string);
    readonly zones: Zone[];
    getZone(zone: Zone): Zone;
    newZone(zone: ZoneProperties): Zone;
}
