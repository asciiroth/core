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
            return this._zones.zones;
        },
        enumerable: true,
        configurable: true
    });
    World.prototype.getZone = function (zone) {
        return this._zones.findZone(zone);
    };
    World.prototype.newZone = function (zone) {
        var newZone = new _1.Zone(zone);
        this._zones.addZone(newZone);
        return newZone;
    };
    return World;
}());
exports.World = World;
//# sourceMappingURL=World.class.js.map