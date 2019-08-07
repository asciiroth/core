"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var Player = /** @class */ (function () {
    function Player(options) {
        var _this = this;
        this.inventory = new _1.Inventory();
        this.xp = 0;
        this.coords = [0, 0];
        this.maxHp = 10;
        this.hp = 10;
        this.strength = 5;
        this.defence = 5;
        this.completedIntroduction = false;
        this.onDeath = function (game) {
            console.log('u ded');
        };
        this.actions = {
            walk: function (game, payload) {
                switch (payload.direction || '') {
                    case 'north':
                        if (_this.zone.areCoordsInGrid(_this.coords[0], _this.coords[1] + 1)) {
                            _this.coords = [_this.coords[0], _this.coords[1] + 1];
                            return true;
                        }
                        else {
                            return false;
                        }
                    case 'east':
                        if (_this.zone.areCoordsInGrid(_this.coords[0] + 1, _this.coords[1])) {
                            _this.coords = [_this.coords[0] + 1, _this.coords[1]];
                            return true;
                        }
                        else {
                            return false;
                        }
                    case 'south':
                        if (_this.zone.areCoordsInGrid(_this.coords[0], _this.coords[1] - 1)) {
                            _this.coords = [_this.coords[0], _this.coords[1] - 1];
                            return true;
                        }
                        else {
                            return false;
                        }
                    case 'south':
                        if (_this.zone.areCoordsInGrid(_this.coords[0] - 1, _this.coords[1])) {
                            _this.coords = [_this.coords[0] - 1, _this.coords[1]];
                            return true;
                        }
                        else {
                            return false;
                        }
                }
            }
        };
        Object.assign(this, options);
    }
    Object.defineProperty(Player.prototype, "spells", {
        get: function () {
            return this._spells.map(function (spellId) { return spellId; }); // Map all ids to actual spells
        },
        enumerable: true,
        configurable: true
    });
    Player.prototype.hasCompleted = function () {
        var questIds = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            questIds[_i] = arguments[_i];
        }
        return questIds.reduce(function (completedAll, questId) {
            if (!completedAll) {
                return false;
            }
            return;
            // return ifCompleted(questId);
        }, true);
    };
    Player.prototype.addAction = function (name, action) {
        this.actions[name] = action;
    };
    Player.prototype.action = function (action, payload) {
        this.actions[action](this._game, payload);
    };
    Player.prototype.setName = function (name) {
        this.name = name;
    };
    Player.prototype.setRace = function (race) {
        this.race = race;
    };
    Player.prototype.setZone = function (zone) {
        this.zone = zone;
    };
    Player.prototype.setClass = function (playerClass) {
        this.class = playerClass;
    };
    Player.prototype.removeHp = function (amount) {
        return this.hp -= amount;
    };
    Player.prototype.addHp = function (amount) {
        if (amount) {
            return this.hp += amount;
        }
        return this.hp = this.maxHp;
    };
    return Player;
}());
exports.Player = Player;
//# sourceMappingURL=Player.class.js.map