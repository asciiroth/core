"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var World = /** @class */ (function () {
    function World(initialGrid) {
        this.setWorldGrid(initialGrid);
    }
    World.prototype.setWorldGrid = function (grid) {
        this._worldGrid = grid;
    };
    World.prototype.getWorldLocation = function (x, y) {
        return this._worldGrid[x][y];
    };
    World.prototype.areCoordsInGrid = function (x, y) {
        return this._worldGrid[x] !== undefined && this._worldGrid[x][y] !== undefined ? true : false;
    };
    World.prototype.getCurrentAvailableDirections = function (x, y) {
        var directions = [];
        if (this.areCoordsInGrid(x + 1, y)) {
            directions.push(EntityDirections.East);
        }
        if (this.areCoordsInGrid(x, y - 1)) {
            directions.push(EntityDirections.South);
        }
        if (this.areCoordsInGrid(x - 1, y)) {
            directions.push(EntityDirections.West);
        }
        if (this.areCoordsInGrid(x, y + 1)) {
            directions.push(EntityDirections.North);
        }
        return directions;
    };
    return World;
}());
exports.World = World;
//# sourceMappingURL=World.class.js.map