"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var Entities = /** @class */ (function () {
    function Entities() {
        this._entities = {};
    }
    Entities.prototype.addEntity = function (options) {
        var entity = new _1.Entity(options);
        this._entities[entity.id] = entity;
        return this._entities[entity.id];
    };
    Entities.prototype.addNpc = function (options) {
        console.log(options);
        var npc = new _1.Npc(options);
        this._entities[npc.id] = npc;
        return this._entities[npc.id];
    };
    Entities.prototype.removeEntity = function (name) {
        delete this._entities[name];
    };
    Entities.prototype.findEntity = function (name) {
        return this._entities[name];
    };
    Object.defineProperty(Entities.prototype, "entities", {
        get: function () {
            return Object.values(this._entities);
        },
        enumerable: true,
        configurable: true
    });
    return Entities;
}());
exports.Entities = Entities;
//# sourceMappingURL=Entities.class.js.map