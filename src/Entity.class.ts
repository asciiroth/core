import { Game } from './';
import { EntityProperties } from './interfaces';

export class Entity {
    public id: string;
    public referenceNames: string[];
    public name: string;
    public description: string;
    public readonly _game: Game;
    private _actions: string[] = [];
    private _custom: {
        [id: string]: any,
    }

    constructor(options: EntityProperties) {
        if (options.actions) {
            this._actions = [
                ...options.actions,
            ];

            delete options.actions;
        }

        if (options.custom) {
            this._custom = {
                ...this._custom,
                ...options.custom,
            }

            delete options.custom;
        }

        Object.assign(this, options);
    }

    public hasAction(action: string): boolean {
        return !!this._actions.includes(action);
    }

    public addAction(name: string): void {
        this._actions.push(name);
    }

    public get custom(): {
        [id: string]: any,
    } {
        return this._custom;
    }

    public get actions(): string[] {
        return this._actions;
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
