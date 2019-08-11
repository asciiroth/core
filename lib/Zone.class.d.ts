import { Location } from './';
import { ZoneProperties } from './interfaces';
export declare class Zone {
    readonly name: string;
    private grid;
    private locations;
    constructor(options: ZoneProperties);
    setGrid(grid: Location[][]): void;
    getLocationAtCoords(x: number, y: number): Location;
    areCoordsInGrid(x: number, y: number): boolean;
    getAvailableDirections(x: number, y: number): {
        north?: Location;
        east?: Location;
        south?: Location;
        west?: Location;
    };
}
