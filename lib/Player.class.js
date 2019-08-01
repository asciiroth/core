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
                    case 'south':
                        if (_this.zone.areCoordsInGrid(_this.coords[0], _this.coords[1] - 1)) {
                            _this.coords = [_this.coords[0], _this.coords[1] - 1];
                            return true;
                        }
                        else {
                            return false;
                        }
                }
                console.log(_this, payload);
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
    // public action(payload: PlayerAction) {
    //     switch (payload.action) {
    //         case EntityActions.Walk:
    //             const [x, y] = this.coords;
    //             const [direction] = payload.data.args;
    //             switch (EntityDirections[direction]) {
    //                 case EntityDirections.North:
    //                     if (this.world.areCoordsInGrid(x, y + 1)) {
    //                         this.coords = [x, y + 1];
    //                         return true;
    //                     } else {
    //                         return false;
    //                     }
    //                 case EntityDirections.East:
    //                     if (this.world.areCoordsInGrid(x + 1, y)) {
    //                         this.coords = [x + 1, y];
    //                         return true;
    //                     } else {
    //                         return false;
    //                     }
    //                 case EntityDirections.South:
    //                     if (this.world.areCoordsInGrid(x, y - 1)) {
    //                         this.coords = [x, y - 1];
    //                         return true;
    //                     } else {
    //                         return false;
    //                     }
    //                 case EntityDirections.West:
    //                     if (this.world.areCoordsInGrid(x - 1, y)) {
    //                         this.coords = [x - 1, y];
    //                         return true;
    //                     } else {
    //                         return false;
    //                     }
    //                 default:
    //                     return false;
    //             }
    //         case EntityActions.Talk:
    //             break;
    //         case EntityActions.Attack:
    //             this.removeHp(payload.data.hp);
    //             break;
    //     }
    // }
    Player.prototype.addAction = function (actionSkeleton) {
        this.actions[actionSkeleton.name] = actionSkeleton.action;
    };
    Player.prototype.action = function (action) {
        this.actions[action.name](this._game, action.data);
    };
    Player.prototype.setName = function (name) {
        this.name = name;
    };
    Player.prototype.setRace = function (race) {
        this.race = race;
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