"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var enums_1 = require("../enums");
var Player = /** @class */ (function () {
    function Player(options) {
        this.inventory = new _1.Inventory();
        this.xp = 0;
        this.coords = [0, 0];
        this.maxHp = 10;
        this.hp = 10;
        this.strength = 5;
        this.defence = 5;
        this.completedIntroduction = false;
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
    Player.prototype.action = function (payload) {
        switch (payload.action) {
            case enums_1.EntityActions.Walk:
                var _a = this.coords, x = _a[0], y = _a[1];
                var direction = payload.data.args[0];
                switch (enums_1.EntityDirections[direction]) {
                    case enums_1.EntityDirections.North:
                        if (this.world.areCoordsInGrid(x, y + 1)) {
                            this.coords = [x, y + 1];
                            return true;
                        }
                        else {
                            return false;
                        }
                    case enums_1.EntityDirections.East:
                        if (this.world.areCoordsInGrid(x + 1, y)) {
                            this.coords = [x + 1, y];
                            return true;
                        }
                        else {
                            return false;
                        }
                    case enums_1.EntityDirections.South:
                        if (this.world.areCoordsInGrid(x, y - 1)) {
                            this.coords = [x, y - 1];
                            return true;
                        }
                        else {
                            return false;
                        }
                    case enums_1.EntityDirections.West:
                        if (this.world.areCoordsInGrid(x - 1, y)) {
                            this.coords = [x - 1, y];
                            return true;
                        }
                        else {
                            return false;
                        }
                    default:
                        return false;
                }
            case enums_1.EntityActions.Talk:
                break;
            case enums_1.EntityActions.Attack:
                this.removeHp(payload.data.hp);
                break;
        }
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