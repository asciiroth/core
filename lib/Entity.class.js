"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Entity = /** @class */ (function () {
    function Entity(options) {
        if (options.actions) {
            this.actions = tslib_1.__assign({}, this.actions, options.actions);
            delete options.actions;
        }
        Object.assign(this, options);
    }
    Entity.prototype.hasAction = function (action) {
        if (this.actions.includes(action)) {
            return true;
        }
        return false;
    };
    Entity.prototype.action = function (action, payload) {
        return this.actions[action](this._game, payload);
    };
    Entity.prototype.addAction = function (name, action) {
        this.actions[name] = action;
    };
    return Entity;
}());
exports.Entity = Entity;
//# sourceMappingURL=Entity.class.js.map