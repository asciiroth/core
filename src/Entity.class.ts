import { Game } from './';
import { EntityProperties } from './interfaces';

export class Entity {
    public id: string;
    public referenceName: string;
    public description: string;
	public readonly _game: Game;
    public actions: {
		[name: string]: Function,
	};

    constructor(options: EntityProperties) {
        Object.assign(this, options);
    }

    public setId(id: string) {
        this.id = id;
    }

    public hasAction(action: string): boolean {
        if (this.actions.includes(action)) {
            return true;
        }

        return false;
    }
}
