"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Entity = /** @class */ (function () {
    function Entity(options) {
        Object.assign(this, options);
    }
    Entity.prototype.setId = function (id) {
        this.id = id;
    };
    Entity.prototype.hasAction = function (action) {
        if (this.actions.includes(action)) {
            return true;
        }
        return false;
    };
    return Entity;
}());
exports.Entity = Entity;
//# sourceMappingURL=Entity.class.js.map