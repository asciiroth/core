import { Game } from './';
import { EntityProperties } from './interfaces';
export declare class Entity {
    id: string | number;
    referenceNames: string[];
    name: string;
    description: string;
    readonly _game: Game;
    actions: {
        [name: string]: Function;
    };
    constructor(options: EntityProperties);
    setId(id: string | number): void;
    hasAction(action: string): boolean;
    action(action: string, payload: object): any;
    addAction(name: string, action: Function): void;
}
