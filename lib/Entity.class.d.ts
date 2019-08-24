import { Game } from './';
import { EntityProperties } from './interfaces';
export declare class Entity {
    id: string;
    referenceNames: string[];
    name: string;
    description: string;
    readonly _game: Game;
    private _actions;
    private _custom;
    constructor(options: EntityProperties);
    hasAction(action: string): boolean;
    addAction(name: string): void;
    readonly custom: {
        [id: string]: any;
    };
    readonly actions: string[];
    addCustom(customProperties: {
        [id: string]: any;
    }): void;
}
