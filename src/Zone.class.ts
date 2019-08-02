import { Location } from './';

interface ZoneOptions {
    name: string;
    grid?: Location[][];
	locations?: Location[];
}

export class Zone {
    public readonly name: string;
    private grid: Location[][] = [[]];

    public constructor(options: ZoneOptions) {
        this.name = options.name;
		
        if (options.grid) {
            this.setGrid(options.grid);
        }

		if (options.locations) {
			options.locations.forEach(location => {
				if (!location.coords) {
					throw new Error(`${ location.name } in zone: ${ this.name } must have coordinates unless specifying 'grid' option.`)
				}

				const [x, y] = location.coords;

				if (!this.grid[x]) {
					this.grid[x] = [];
				}

				this.grid[x][y] = location;
			})
		}
    }

    public setGrid(grid: Location[][]): void {
        this.grid = grid;
    }

    public getLocationAtCoords(x: number, y: number): Location {
        return this.grid[x][y];
    }

    public areCoordsInGrid(x: number, y: number): boolean {
        return this.grid[x] !== undefined && this.grid[x][y] !== undefined ? true : false;
    }

    public getCurrentAvailableDirections(x: number, y: number): string[] {
        const directions = [];

        if (this.areCoordsInGrid(x + 1, y)) {
            directions.push('East');
        }

        if (this.areCoordsInGrid(x, y - 1)) {
            directions.push('South');
        }

        if (this.areCoordsInGrid(x - 1, y)) {
            directions.push('West');
        }

        if (this.areCoordsInGrid(x, y + 1)) {
            directions.push('North');
        }

        return directions;
    }
}
