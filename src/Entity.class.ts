import { Game } from './';
import { EntityProperties } from './interfaces';

export class Entity {
    public id: string;
    public referenceNames: string[];
    public name: string;
    public description: string;
    public readonly _game: Game;
    public actions: string[] = [];
    private _custom: {
        [id: string]: any,
    }

    constructor(options: EntityProperties) {
        if (options.actions) {
            this.actions = [
                ...options.actions,
            ];

            delete options.actions;

            this._custom = {
                ...this._custom,
                ...options.custom,
            }

            delete options.custom;
        }
        Object.assign(this, options);
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

    public get custom(): {
        [id: string]: any,
    } {
        return this._custom;
    }

    public addCustom(customProperties: {
        [id: string]: any,
    }): void {
        this._custom = {
            ...this._custom,
            ...customProperties,
        }
    }
}
