"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _1 = require("./");
var Npc = /** @class */ (function (_super) {
    tslib_1.__extends(Npc, _super);
    // public actions: {
    //     [name: string]: Function,
    // } = {
    //         'talk': (game: Game, payload?: NpcActionPayload) => {
    //             if (payload && payload.talkSubject) {
    //                 switch (payload.talkSubject) {
    //                     default:
    //                         game.addOutput(<string>this.speech.default);
    //                 }
    //             }
    //
    //             if (!payload && this.speech && this.speech.default) {
    //                 game.addOutput(<string>this.speech.default);
    //             }
    //
    //             game.addOutput(`${this.name} doesn't seem to want to talk...`);
    //             return;
    //         },
    //         'attack': (game: Game, payload: NpcActionPayload) => {
    //             this.removeHp(payload.hp);
    //         }
    //     }
    function Npc(options) {
        var _this = _super.call(this, options) || this;
        _this.hp = 5;
        _this.strength = 5;
        _this.defence = 5;
        _this.friendly = true;
        _this.speech = {
            default: 'Hello there',
        };
        Object.assign(_this, options);
        return _this;
    }
    Npc.prototype.removeHp = function (amount) {
        return this.hp -= amount;
    };
    return Npc;
}(_1.Entity));
exports.Npc = Npc;
//# sourceMappingURL=Npc.class.js.map