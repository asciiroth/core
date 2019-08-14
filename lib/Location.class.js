"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Base_store_1 = require("./stores/Base.store");
var Location = /** @class */ (function () {
    function Location(options) {
        this._entities = new Base_store_1.BaseStore();
        this.name = options.name || '';
        this.description = options.description || '';
        this.image = options.description || '';
        this._coords = options.coords || null;
        if (options.entities) {
            this._entities.add(options.entities);
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
    Location.prototype.find = function (name) {
        return this._entities.find(name);
    };
    Object.defineProperty(Location.prototype, "entities", {
        get: function () {
            return this._entities.items;
        },
        enumerable: true,
        configurable: true
    });
    return Location;
}());
exports.Location = Location;
//# sourceMappingURL=Location.class.js.map