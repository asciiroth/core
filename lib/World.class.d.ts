import { Zones, Zone } from './';
export declare class World {
    private name;
    private _zones;
    constructor(name: string);
    readonly zones: Zones;
    getZone(zone: Zone): Zone;
    addZone(zone: Zone): void;
}
