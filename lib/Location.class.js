"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Location = /** @class */ (function () {
    function Location(options) {
        var _this = this;
        this.entities = [];
        this.name = options.name || '';
        this.description = options.description || '';
        this.image = options.description || '';
        this.coords = options.coords || null;
        if (options.entities) {
            options.entities.forEach(function (entity) { return _this.addEntity(entity); });
        }
    }
    Location.prototype.addEntity = function (entity) {
        entity.setId(this.generateId());
        this.entities.push(entity);
    };
    Location.prototype.removeEntity = function (entityId) {
        this.entities = this.entities.filter(function (entity) { return entity.id !== entityId; });
    };
    Location.prototype.findEntity = function (name) {
        if (!name) {
            return null;
        }
        return this.entities.find(function (entity) { return entity.referenceName.toLowerCase() === name.toLowerCase(); });
    };
    Location.prototype.generateId = function () {
        return "e_" + performance.now();
    };
    return Location;
}());
exports.Location = Location;
//# sourceMappingURL=Location.class.js.map