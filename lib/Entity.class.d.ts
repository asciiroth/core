import { Game } from './';
import { EntityProperties } from './interfaces';
export declare class Entity {
    id: string;
    referenceName: string;
    description: string;
    readonly _game: Game;
    actions: {
        [name: string]: Function;
    };
    constructor(options: EntityProperties);
    setId(id: string): void;
    hasAction(action: string): boolean;
}
