import { Zone } from './';
export declare class Zones {
    private _zones;
    readonly zones: Zone[];
    findZone(zone: Zone): Zone;
    addZone(zone: Zone): void;
    removeZone(zone: Zone): void;
}
