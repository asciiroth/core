"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Zones = /** @class */ (function () {
    function Zones() {
    }
    Object.defineProperty(Zones.prototype, "zones", {
        get: function () {
            return this._zones;
        },
        enumerable: true,
        configurable: true
    });
    Zones.prototype.findZone = function (zone) {
        return this._zones.find(function (_zone) { return _zone.name === zone.name; });
    };
    Zones.prototype.addZone = function (zone) {
        if (!this.findZone(zone)) {
            this._zones.push(zone);
        }
    };
    Zones.prototype.removeZone = function (zone) {
        this._zones = this._zones.filter(function (_zone) { return _zone.name !== zone.name; });
    };
    return Zones;
}());
exports.Zones = Zones;
//# sourceMappingURL=Zones.class.js.map