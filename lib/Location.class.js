"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Base_store_1 = require("./stores/Base.store");
var Location = /** @class */ (function () {
    function Location(options) {
        this.entities = new Base_store_1.BaseStore();
        this.name = options.name || '';
        this.description = options.description || '';
        this.image = options.description || '';
        this._coords = options.coords || null;
        if (options.entities) {
            this.entities.add(options.entities);
        }
    }
    Object.defineProperty(Location.prototype, "coords", {
        get: function () {
            return this._coords;
        },
        enumerable: true,
        configurable: true
    });
    Location.prototype.setCoords = function (x, y) {
        this._coords = [x, y];
    };
    return Location;
}());
exports.Location = Location;
//# sourceMappingURL=Location.class.js.map