"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Zone = /** @class */ (function () {
    function Zone(options) {
        this.grid = [[]];
        this.name = options.name;
        if (options.grid) {
            this.setGrid(options.grid);
        }
    }
    Zone.prototype.setGrid = function (grid) {
        this.grid = grid;
    };
    Zone.prototype.getLocationAtCoords = function (x, y) {
        return this.grid[x][y];
    };
    Zone.prototype.areCoordsInGrid = function (x, y) {
        return this.grid[x] !== undefined && this.grid[x][y] !== undefined ? true : false;
    };
    Zone.prototype.getCurrentAvailableDirections = function (x, y) {
        var directions = [];
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
    };
    return Zone;
}());
exports.Zone = Zone;
//# sourceMappingURL=Zone.class.js.map