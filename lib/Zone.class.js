"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Zone = /** @class */ (function () {
    function Zone(options) {
        var _this = this;
        this.grid = [[]];
        this.locations = [];
        this.name = options.name;
        if (options.grid) {
            this.setGrid(options.grid);
        }
        if (options.locations) {
            this.locations = options.locations;
            options.locations.forEach(function (location) {
                _this.addLocation(location);
            });
        }
    }
    Zone.prototype.addLocation = function (location) {
        if (!location.coords) {
            throw new Error(location.name + " in zone: " + this.name + " must have coordinates unless specifying 'grid' option.");
        }
        var _a = location.coords, x = _a[0], y = _a[1];
        if (!this.grid[x]) {
            this.grid[x] = [];
        }
        this.grid[x][y] = location;
    };
    Zone.prototype.setGrid = function (grid) {
        this.grid = grid;
        for (var x = 0; x < grid.length; x++) {
            for (var y = 0; y < grid.length; y++) {
                if (grid[x][y]) {
                    grid[x][y].setCoords(x, y);
                }
            }
        }
        var locations = grid.flat();
        this.locations = locations;
    };
    Zone.prototype.getLocationAtCoords = function (x, y) {
        return this.grid[x][y];
    };
    Zone.prototype.areCoordsInGrid = function (x, y) {
        return this.grid[x] !== undefined && this.grid[x][y] !== undefined ? true : false;
    };
    Zone.prototype.getAvailableDirections = function (x, y) {
        var directions = {};
        var directionCoords = {
            north: [x, y + 1],
            east: [x + 1, y],
            south: [x, y - 1],
            west: [x - 1, y],
        };
        if (this.areCoordsInGrid.apply(this, directionCoords.north)) {
            directions.north = this.getLocationAtCoords.apply(this, directionCoords.north);
        }
        if (this.areCoordsInGrid.apply(this, directionCoords.east)) {
            directions.east = this.getLocationAtCoords.apply(this, directionCoords.east);
        }
        if (this.areCoordsInGrid.apply(this, directionCoords.south)) {
            directions.south = this.getLocationAtCoords.apply(this, directionCoords.south);
        }
        if (this.areCoordsInGrid.apply(this, directionCoords.west)) {
            directions.west = this.getLocationAtCoords.apply(this, directionCoords.west);
        }
        console.log(this.grid);
        return directions;
    };
    return Zone;
}());
exports.Zone = Zone;
//# sourceMappingURL=Zone.class.js.map