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
    getCurrentAvailableDirections(x: number, y: number): string[];
}
