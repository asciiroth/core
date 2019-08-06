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
            this.locations = options.locations.slice();
            options.locations.forEach(function (location) {
                if (!location.coords) {
                    throw new Error(location.name + " in zone: " + _this.name + " must have coordinates unless specifying 'grid' option.");
                }
                var _a = location.coords, x = _a[0], y = _a[1];
                if (!_this.grid[x]) {
                    _this.grid[x] = [];
                }
                _this.grid[x][y] = location;
            });
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