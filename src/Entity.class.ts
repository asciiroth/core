import { Game } from './';
import { EntityProperties } from './interfaces';

export class Entity {
    public id: string;
    public referenceNames: string[];
    public name: string;
    public description: string;
    public readonly _game: Game;
    public actions: {
        [name: string]: Function,
    };

    constructor(options: EntityProperties) {
        if (options.actions) {
            this.actions = {
                ...this.actions,
                ...options.actions,
            }

            delete options.actions;
        }
        Object.assign(this, options);
        this.setId(performance.now());
    }

    public setId(id: string | number) {
        this.id = id;
    }

    public hasAction(action: string): boolean {
        if (this.actions.includes(action)) {
            return true;
        }

        return false;
    }

    public action(action: string, payload: object) {
        return this.actions[action](this._game, payload);
    }

    public addAction(name: string, action: Function): void {
        this.actions[name] = action;
    }
}
