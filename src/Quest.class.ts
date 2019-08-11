export class Quest {
    public readonly id: string;
    
    constructor(
        public readonly name: string = 'hello'
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
