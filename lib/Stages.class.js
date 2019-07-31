"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var Stages = /** @class */ (function () {
    function Stages() {
        this._stages = [];
    }
    Stages.prototype.addStage = function (name) {
        var stage = new _1.Stage(name);
        return this._stages[stage.name] = stage;
    };
    Stages.prototype.removeStage = function (name) {
        delete this._stages[name];
    };
    Object.defineProperty(Stages.prototype, "stages", {
        get: function () {
            return Object.values(this._stages);
        },
        enumerable: true,
        configurable: true
    });
    return Stages;
}());
exports.Stages = Stages;
//# sourceMappingURL=Stages.class.js.map