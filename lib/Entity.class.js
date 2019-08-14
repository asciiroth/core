"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Entity = /** @class */ (function () {
    function Entity(options) {
        this.actions = [];
        if (options.actions) {
            this.actions = options.actions.slice();
            delete options.actions;
            this._custom = tslib_1.__assign({}, this._custom, options.custom);
            delete options.custom;
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
    Object.defineProperty(Entity.prototype, "custom", {
        get: function () {
            return this._custom;
        },
        enumerable: true,
        configurable: true
    });
    Entity.prototype.addCustom = function (customProperties) {
        this._custom = tslib_1.__assign({}, this._custom, customProperties);
    };
    return Entity;
}());
exports.Entity = Entity;
//# sourceMappingURL=Entity.class.js.map