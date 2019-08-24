import { Location } from './';
import { ZoneProperties } from './interfaces';
export declare class Zone {
    readonly name: string;
    private grid;
    private locations;
    constructor(options: ZoneProperties);
    addLocation(location: Location): void;
    setGrid(grid: Location[][]): void;
    getLocationAtCoords(x: number, y: number): Location;
    areCoordsInGrid(x: number, y: number): boolean;
    getAvailableDirections(x: number, y: number): {
        north?: {
            zone?: Zone;
            location: Location;
        };
        east?: {
            zone?: Zone;
            location: Location;
        };
        south?: {
            zone?: Zone;
            location: Location;
        };
        west?: {
            zone?: Zone;
            location: Location;
        };
        [key: string]: {
            zone?: Zone;
            location: Location;
        };
    };
}
