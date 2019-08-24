"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Entity = /** @class */ (function () {
    function Entity(options) {
        this._actions = [];
        if (options.actions) {
            this._actions = options.actions.slice();
            delete options.actions;
        }
        if (options.custom) {
            this._custom = tslib_1.__assign({}, this._custom, options.custom);
            delete options.custom;
        }
        Object.assign(this, options);
    }
    Entity.prototype.hasAction = function (action) {
        return !!this._actions.includes(action);
    };
    Entity.prototype.addAction = function (name) {
        this._actions.push(name);
    };
    Object.defineProperty(Entity.prototype, "custom", {
        get: function () {
            return this._custom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "actions", {
        get: function () {
            return this._actions;
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