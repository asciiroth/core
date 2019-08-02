import { Location } from './';
interface ZoneOptions {
    name: string;
    grid?: Location[][];
    locations?: Location[];
}
export declare class Zone {
    readonly name: string;
    private grid;
    constructor(options: ZoneOptions);
    setGrid(grid: Location[][]): void;
    getLocationAtCoords(x: number, y: number): Location;
    areCoordsInGrid(x: number, y: number): boolean;
    getCurrentAvailableDirections(x: number, y: number): string[];
}
export {};
