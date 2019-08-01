"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Quest = /** @class */ (function () {
    function Quest(name) {
        if (name === void 0) { name = 'hello'; }
        this.name = name;
    }
    return Quest;
}());
exports.Quest = Quest;
// going to have things like:
// {
// 	questGiver: npcId | name,
// 	startCondition(){}
// 	endCondition(){}
// 	minLevel: 5
// 	rewards: [
// 		{
// 			item: id | name,
// 			quantity: 1,
// 		}
// 	],
// 	questStartDialogue: string
// 	questEndDialogue: string
// 	questInProgressDialogue: string
//
// }
//# sourceMappingURL=Quest.class.js.map