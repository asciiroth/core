import {
    Inventory,
    Npc,
    World,
    Race,
    Class,
    Zone,
    Game,
    Pet,
} from './';
import { PlayerProperties } from './interfaces';

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
    public pet: Pet; // For hunters maybe
    public _spells: number[];
    private quests: any[]; // Need to just figure out the tiny detail of quests
    public coords: [number, number] = [0, 0];
    public zone: Zone;
    public maxHp: number = 10;
    public hp: number = 10;
    public strength: number = 5;
    public defence: number = 5;
    public combatSelectedEnemy: Partial<Npc>;
    public completedIntroduction: boolean = false;
    private _game: Game;
	public onDeath: Function = (game: Game) => {
		console.log('u ded');
	};
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
					case 'east':
                        if (this.zone.areCoordsInGrid(this.coords[0] + 1, this.coords[1])) {
                            this.coords = [this.coords[0] + 1, this.coords[1]];
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
					case 'south':
                        if (this.zone.areCoordsInGrid(this.coords[0] - 1, this.coords[1])) {
                            this.coords = [this.coords[0] - 1, this.coords[1]];
                            return true;
                        } else {
                            return false;
                        }
                }
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

    public addAction(name: string, action: Function): void {
        this.actions[name] = action;
    }

    public action(action: string, payload: PlayerActionPayload) {
        this.actions[action](this._game, payload);
    }

    public setName(name: string) {
        this.name = name;
    }

    public setRace(race: Race) {
        this.race = race;
    }

	public setZone(zone: Zone) {
		this.zone = zone;
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
