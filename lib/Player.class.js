"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var Player = /** @class */ (function () {
    // public actions: {
    //     [name: string]: Function,
    // } = {
    //         walk: (game: Game, payload: PlayerActionPayload) => {
    //             switch (payload.direction || '') {
    //                 case 'north':
    //                     if (this.zone.areCoordsInGrid(this.coords[0], this.coords[1] + 1)) {
    //                         this.coords = [this.coords[0], this.coords[1] + 1];
    //                         return true;
    //                     } else {
    //                         return false;
    //                     }
    // 				case 'east':
    //                     if (this.zone.areCoordsInGrid(this.coords[0] + 1, this.coords[1])) {
    //                         this.coords = [this.coords[0] + 1, this.coords[1]];
    //                         return true;
    //                     } else {
    //                         return false;
    //                     }
    //                 case 'south':
    //                     if (this.zone.areCoordsInGrid(this.coords[0], this.coords[1] - 1)) {
    //                         this.coords = [this.coords[0], this.coords[1] - 1];
    //                         return true;
    //                     } else {
    //                         return false;
    //                     }
    // 				case 'south':
    //                     if (this.zone.areCoordsInGrid(this.coords[0] - 1, this.coords[1])) {
    //                         this.coords = [this.coords[0] - 1, this.coords[1]];
    //                         return true;
    //                     } else {
    //                         return false;
    //                     }
    //             }
    //         }
    //     }
    function Player(options) {
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
        Object.assign(this, options);
        if (options.location && !options.coords) {
            this.coords = options.location.coords;
        }
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
    // public addAction(name: string, action: Function): void {
    //     this.actions[name] = action;
    // }
    //
    // public action(action: string, payload: PlayerActionPayload) {
    //     this.actions[action](this._game, payload);
    // }
    Player.prototype.setName = function (name) {
        this.name = name;
    };
    Player.prototype.setRace = function (race) {
        this.race = race;
    };
    Player.prototype.setZone = function (zone) {
        this.zone = zone;
    };
    Player.prototype.setLocation = function (location) {
        this.location = location;
        this.coords = location.coords;
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