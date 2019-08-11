"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _1 = require("./");
var Base_store_1 = require("./stores/Base.store");
var Stages = /** @class */ (function () {
    function Stages() {
        this._stages = new Base_store_1.BaseStore();
    }
    Stages.prototype.createStage = function (name) {
        var stage = new _1.Stage(name);
        this._stages.add(stage);
        return stage;
    };
    return Stages;
}());
var Entities = /** @class */ (function () {
    function Entities() {
        this._entities = new Base_store_1.BaseStore();
    }
    Entities.prototype.createEntity = function (entityOptions) {
        var entity = new _1.Entity(entityOptions);
        this._entities.add(entity);
        return entity;
    };
    return Entities;
}());
var Game = /** @class */ (function () {
    function Game(_name) {
        _this = _super.call(this) || this;
        this._name = _name;
        this._entities = new Entities();
        this._output = [];
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
    Object.defineProperty(Game.prototype, "entities", {
        // public addStage(name: string): Stage {
        //     const stage = new Stage(name);
        //     this._stages.add(stage);
        // 	return stage;
        // }
        //
        // public setStage(stage: Stage | string): void {
        // 	this._stage = this._stages.find(stage);
        // }
        //
        // public get stages(): BaseStore<Stage> {
        //     return this._stages;
        // }
        get: function () {
            return this._entities;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "output", {
        get: function () {
            return this._output;
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.addOutput = function (output) {
        this._output.push(output);
    };
    Game.prototype.newEntity = function (options) {
        return this._entities.addEntity(tslib_1.__assign({}, options, { _game: this }));
    };
    Game.prototype.newNpc = function (options) {
        return this._entities.addNpc(tslib_1.__assign({}, options, { _game: this }));
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=Game.class.js.map