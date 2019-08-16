"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _1 = require("./");
var Utils_class_1 = require("./utils/Utils.class");
var Base_store_1 = require("./stores/Base.store");
var Game = /** @class */ (function () {
    function Game(_name) {
        var _this = this;
        this._name = _name;
        this._stages = new Base_store_1.BaseStore();
        this._zones = new Base_store_1.BaseStore();
        this._worlds = new Base_store_1.BaseStore();
        this._locations = new Base_store_1.BaseStore();
        this._npcs = new Base_store_1.BaseStore();
        this._entities = new Base_store_1.BaseStore();
        this._quests = new Base_store_1.BaseStore();
        this._abilities = new Base_store_1.BaseStore();
        this._output = [];
        this._actions = {
            talk: function (args) {
                // args will be something like ['abby']
                var _a = args.map(function (item) { return item.toLowerCase(); }), name = _a[0], subject = _a[1];
                if (!name) {
                    return _this.addOutput('Who would you like to talk to?');
                }
                var target = _this.player.location.find(name);
                if (!target) {
                    return _this.addOutput("Cannot find " + name);
                }
                if (target.speech[subject]) {
                    return _this.addOutput(target.speech[subject]);
                }
                _this.addOutput(target.speech.default);
            },
            walk: function (args) {
                var _a;
                var direction = args.map(function (item) { return item.toLowerCase(); })[0];
                if (!direction) {
                    return _this.addOutput('Which direction would you like to walk?');
                }
                var availableDirections = (_a = _this._player.zone).getAvailableDirections.apply(_a, _this._player.coords);
                if (availableDirections[direction]) {
                    return _this._player.setLocation(availableDirections[direction]);
                }
                return _this.addOutput('Cannot move in that direction');
            },
            attack: function (args) {
                var name = args.map(function (item) { return item.toLowerCase(); })[0];
                var target = _this.player.location.find(name);
                if (!target) {
                    return _this.addOutput("Cannot find " + name);
                }
                var damage = Utils_class_1.Utils.calculateBaseDamage(_this.player.strength, target.defence);
                console.log(damage);
            },
        };
    }
    Object.defineProperty(Game.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.action = function (command, args) {
        if (this._actions[command]) {
            return this._actions[command](args);
        }
        this.addOutput("Command \"" + command + "\" does not exist");
    };
    Object.defineProperty(Game.prototype, "stage", {
        // Stages
        get: function () {
            return this._stages.active.name;
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
    Game.prototype.addStage = function (name) {
        var stage = new _1.Stage(name);
        this._stages.add(stage);
        return stage;
    };
    Game.prototype.setStage = function (stage) {
        this._stages.setActive(stage);
    };
    // Worlds
    Game.prototype.newWorld = function (name) {
        var world = new _1.World(name);
        this._worlds.add(world);
        return world;
    };
    Game.prototype.setWorld = function (world) {
        this._worlds.setActive(world);
    };
    Object.defineProperty(Game.prototype, "world", {
        get: function () {
            return this._worlds.active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "worlds", {
        get: function () {
            return this._worlds;
        },
        enumerable: true,
        configurable: true
    });
    // Zones
    Game.prototype.newZone = function (options) {
        var zone = new _1.Zone(options);
        this._zones.add(zone);
        return zone;
    };
    Game.prototype.setZone = function (zone) {
        this._zones.setActive(zone);
    };
    Object.defineProperty(Game.prototype, "zones", {
        get: function () {
            return this._zones;
        },
        enumerable: true,
        configurable: true
    });
    // Locations
    Game.prototype.newLocation = function (options) {
        var location = new _1.Location(options);
        this._locations.add(location);
        return location;
    };
    Object.defineProperty(Game.prototype, "locations", {
        get: function () {
            return this._locations;
        },
        enumerable: true,
        configurable: true
    });
    // Player
    Game.prototype.newPlayer = function (options) {
        if (!options.world) {
            throw new Error('Game must have a world before you can add a new player.');
        }
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
    Object.defineProperty(Game.prototype, "entities", {
        // Entities
        get: function () {
            return this._entities.items;
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.newEntity = function (options) {
        return this._entities.add(new _1.Entity(tslib_1.__assign({}, options)));
    };
    Game.prototype.newNpc = function (options) {
        return this._entities.add(new _1.Npc(tslib_1.__assign({}, options)));
    };
    Object.defineProperty(Game.prototype, "output", {
        // Output
        get: function () {
            return this._output;
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.addOutput = function (output) {
        this._output.push(output);
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=Game.class.js.map