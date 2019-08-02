"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _1 = require("./");
var Npc = /** @class */ (function (_super) {
    tslib_1.__extends(Npc, _super);
    function Npc(options) {
        var _this = _super.call(this, options) || this;
        _this.hp = 5;
        _this.strength = 5;
        _this.defence = 5;
        _this.friendly = true;
        _this.actions = {
            'talk': function (game, payload) {
                if (payload && payload.talkSubject) {
                    switch (payload.talkSubject) {
                        default:
                            return _this.speech.default;
                    }
                }
                return _this.referenceName + " doesn't seem to want to talk...";
            },
            'attack': function (game, payload) {
                _this.removeHp(payload.hp);
            }
        };
        Object.assign(_this, options);
        return _this;
    }
    Npc.prototype.action = function (action, payload) {
        return this.actions[action](this._game, payload);
    };
    Npc.prototype.removeHp = function (amount) {
        return this.hp -= amount;
    };
    return Npc;
}(_1.Entity));
exports.Npc = Npc;
//# sourceMappingURL=Npc.class.js.map