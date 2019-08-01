export class Quest {
    constructor(
        private name: string = 'hello'
    ) { }
}

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
