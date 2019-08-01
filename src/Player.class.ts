import {
	Inventory,
	Npc,
	World,
	Race,
	Class,
	Zone,
	Game,
} from './';

interface PlayerProperties {
    xp?: number;
    name: string;
    race?: Race;
    class?: Class;
    coords: [number, number];
	zone: Zone;
    world: World,
	game: Game,
}

interface PlayerAction {
    action: string;
    data: PlayerActionPayload;
}

interface PlayerActionPayload {
    direction?: string
    args?: string[];
    hp?: number;
}

export class Player {
    public inventory: Inventory = new Inventory();
    public xp: number = 0;
    public name: string;
    public race: Race; // Todo: RaceEnum
    public class: Class; // Todo: ClassEnum
    public petName?: string; // For hunters maybe
    public _spells: number[];
    private quests: any[]; // Need to just figure out the tiny detail of quests
    public coords: [number, number] = [0, 0];
    // public world: World;
	public zone: Zone;
    public maxHp: number = 10;
    public hp: number = 10;
    public strength: number = 5;
    public defence: number = 5;
    public combatSelectedEnemy: Partial<Npc>;
    public completedIntroduction: boolean = false;
	private _game: Game;
	public actions: {
		[name: string]: Function,
	} = {
		walk: (game: Game, payload: PlayerActionPayload) => {
			switch (payload.direction || '') {
				case 'north':
					if (this.zone.areCoordsInGrid(this.coords[0], this.coords[1] + 1)) {
	                    this.coords = [this.coords[0], this.coords[1] + 1];
	                    return true;
	                } else {
	                    return false;
	                }
				case 'south':
				if (this.zone.areCoordsInGrid(this.coords[0], this.coords[1] - 1)) {
					this.coords = [this.coords[0], this.coords[1] - 1];
	                    return true;
	                } else {
	                    return false;
	                }
			}
			console.log(this, payload);
		}
	}

    constructor(options: PlayerProperties) {
        Object.assign(this, options);
    }

    public get spells() {
        return this._spells.map(spellId => spellId); // Map all ids to actual spells
    }

    public hasCompleted(...questIds: number[]) {
        return questIds.reduce((completedAll, questId) => {
            if (!completedAll) {
                return false;
            }

            return;
            // return ifCompleted(questId);
        }, true);
    }

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

	public addAction(actionSkeleton: { name: string, action: Function}): void {
		this.actions[actionSkeleton.name] = actionSkeleton.action;
	}

	public action(action: {
		name: string,
		data: object
	}) {
		this.actions[action.name](this._game, action.data);
	}

    public setName(name: string) {
        this.name = name;
    }

    public setRace(race: Race) {
        this.race = race;
    }

    public setClass(playerClass: Class) {
        this.class = playerClass;
    }

    public removeHp(amount: number): number {
        return this.hp -= amount;
    }

    public addHp(amount?: number): number {
        if (amount) {
            return this.hp += amount;
        }

        return this.hp = this.maxHp;
    }
}
