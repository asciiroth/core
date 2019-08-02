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
    Game.prototype.newWorld = function (name) {
        this._world = new _1.World(name);
        return this._world;
    };
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
    Game.prototype.newPlayer = function (options) {
        if (!this.world) {
            throw new Error('Game must have a world before you can add a new player.');
        }
        options.world = this._world;
        options.game = this;
        this._player = new _1.Player(options);
        return this._player;
    };
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
            return this._stage.name;
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.setStage = function (stageName) {
        var stage = this._stages.findStage(stageName);
        if (stage) {
            this._stage = stage;
            return;
        }
        throw new Error("Cannot find stage " + stageName);
    };
    Object.defineProperty(Game.prototype, "stages", {
        get: function () {
            return this._stages;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "entities", {
        get: function () {
            return this._entities;
        },
        enumerable: true,
        configurable: true
    });
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=Game.class.js.map