import { Entity, Game } from './';
import { NpcProperties } from './interfaces';

export interface NpcAction {
    action: string;
    data: NpcActionPayload;
}

export interface NpcActionPayload {
    talkSubject?: string;
    hp?: number;
}

export interface Speech {
    [id: string]: string | Speech;
}

export class Npc extends Entity {
    public id: string;
    public speech: Speech;
    public hp: number = 5;
    public strength: number = 5;
    public defence: number = 5;
    public friendly: boolean = true;
	public actions: {
		[name: string]: Function,
	} = {
		'talk': (game: Game, payload?: NpcActionPayload) => {
			if (payload && payload.talkSubject) {
				switch (payload.talkSubject) {
					default:
						return this.speech.default;
				}
			}

			return `${ this.referenceName } doesn't seem to want to talk...`;
		},
		'attack': (game: Game, payload: NpcActionPayload) => {
			this.removeHp(payload.hp);
		}
	}

    constructor(options: NpcProperties) {
        super(options);
        Object.assign(this, options);
    }

    public action(action: string, payload: NpcAction) {
        return this.actions[action](this._game, payload);
    }

    public removeHp(amount: number): number {
        return this.hp -= amount;
    }
}
