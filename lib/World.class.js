"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var World = /** @class */ (function () {
    function World(name) {
        this.name = name;
        this._zones = new _1.Zones();
    }
    Object.defineProperty(World.prototype, "zones", {
        get: function () {
            return this._zones;
        },
        enumerable: true,
        configurable: true
    });
    World.prototype.getZone = function (zone) {
        return this._zones.findZone(zone);
    };
    World.prototype.addZone = function (zone) {
        this._zones.addZone(zone);
    };
    return World;
}());
exports.World = World;
//# sourceMappingURL=World.class.js.map