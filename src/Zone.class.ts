import { Location } from './';
import { ZoneProperties } from './interfaces';

export class Zone {
    public readonly name: string;
    private grid: Location[][] = [[]];
    private locations: Location[] = [];

    public constructor(options: ZoneProperties) {
        this.name = options.name;

        if (options.grid) {
            this.setGrid(options.grid);
        }

        if (options.locations) {
            this.locations = options.locations;
            options.locations.forEach(location => {
                this.addLocation(location);
            })
        }
    }

    public addLocation(location: Location) {
        if (!location.coords) {
            throw new Error(`${location.name} in zone: ${this.name} must have coordinates unless specifying 'grid' option.`)
        }

        const [x, y] = location.coords;

        if (!this.grid[x]) {
            this.grid[x] = [];
        }

        this.grid[x][y] = location;
    }

    public setGrid(grid: Location[][]): void {
        this.grid = grid;

        for (let x = 0; x < grid.length; x++) {
            for (let y = 0; y < grid[x].length; y++) {
                if (grid[x][y]) {
                    grid[x][y].setCoords(x, y);
                }
            }
        }

        // @ts-ignore
        const locations = grid.flat();
        this.locations = locations;
    }

    public getLocationAtCoords(x: number, y: number): Location {
        return this.grid[x][y];
    }

    public areCoordsInGrid(x: number, y: number): boolean {
        return this.grid[x] !== undefined && this.grid[x][y] !== undefined ? true : false;
    }

    public getAvailableDirections(x: number, y: number): {
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
    } {
        let directions: {
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
        } = {};

        const directionCoords: {
            north: [number, number];
            east: [number, number];
            south: [number, number];
            west: [number, number];
        } = {
            north: [x, y + 1],
            east: [x + 1, y],
            south: [x, y - 1],
            west: [x - 1, y],
        };

        if (this.areCoordsInGrid(...directionCoords.north)) {
            directions.north = {
                zone: this,
                location: this.getLocationAtCoords(...directionCoords.north),
            };
        }

        if (this.areCoordsInGrid(...directionCoords.east)) {
            directions.east = {
                location: this.getLocationAtCoords(...directionCoords.east),
            };
        }

        if (this.areCoordsInGrid(...directionCoords.south)) {
            directions.south = {
                location: this.getLocationAtCoords(...directionCoords.south),
            };
        }

        if (this.areCoordsInGrid(...directionCoords.west)) {
            directions.west = {
                location: this.getLocationAtCoords(...directionCoords.west),
            };
        }

        const currentLocation = this.getLocationAtCoords(x, y);

        directions = {
            ...directions,
            ...currentLocation.customDirections,
        }

        return directions;
    }
}
