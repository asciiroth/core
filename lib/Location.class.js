"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateId = function () {
    return "e_" + performance.now();
};
var Location = /** @class */ (function () {
    function Location(options) {
        var _this = this;
        this.entities = [];
        options.entities.forEach(function (entity) { return _this.addEntity(entity); });
    }
    Location.prototype.addEntity = function (entity) {
        entity.setId(generateId());
        this.entities.push(entity);
    };
    Location.prototype.removeEntity = function (entityId) {
        this.entities = this.entities.filter(function (_a) {
            var id = _a.id;
            return id !== entityId;
        });
    };
    Location.prototype.findEntity = function (name) {
        if (!name) {
            return null;
        }
        return this.entities.find(function (_a) {
            var referenceName = _a.referenceName;
            return referenceName.toLowerCase() === name.toLowerCase();
        });
    };
    return Location;
}());
exports.Location = Location;
//# sourceMappingURL=Location.class.js.map