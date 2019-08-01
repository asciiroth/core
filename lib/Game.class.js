"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var Game = /** @class */ (function () {
    function Game(_name) {
        this._name = _name;
        this._stages = new _1.Stages();
    }
    Object.defineProperty(Game.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.setWorld = function (world) {
        this._world = world;
    };
    Object.defineProperty(Game.prototype, "world", {
        get: function () {
            return this._world;
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.setPlayer = function (player) {
        this._player = player;
    };
    Object.defineProperty(Game.prototype, "player", {
        get: function () {
            return this._player;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "stage", {
        get: function () {
            return this._stage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "stages", {
        get: function () {
            return this._stages;
        },
        enumerable: true,
        configurable: true
    });
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=Game.class.js.map