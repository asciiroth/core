import { Game } from './';
import { EntityProperties } from './interfaces';
export declare class Entity {
    id: string;
    referenceNames: string[];
    name: string;
    description: string;
    readonly _game: Game;
    actions: string[];
    private _custom;
    constructor(options: EntityProperties);
    hasAction(action: string): boolean;
    action(action: string, payload: object): any;
    addAction(name: string, action: Function): void;
    readonly custom: {
        [id: string]: any;
    };
    addCustom(customProperties: {
        [id: string]: any;
    }): void;
}
