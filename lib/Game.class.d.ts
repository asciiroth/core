import { World, Player, Entity } from './';
import { PlayerProperties, EntityProperties, NpcProperties } from './interfaces';
declare class Entities {
    private _entities;
    createEntity(entityOptions: EntityProperties): Entity;
}
export declare class Game {
    private _name;
    private _stage;
    private _world;
    private _player;
    private _entities;
    private _output;
    constructor(_name: string);
    readonly name: string;
    newWorld(name: string): World;
    setWorld(world: World): void;
    readonly world: World;
    newPlayer(options: PlayerProperties): Player;
    setPlayer(player: Player): void;
    readonly player: Player;
    readonly stage: string;
    readonly entities: Entities;
    readonly output: string[];
    addOutput(output: string): void;
    newEntity(options: EntityProperties): any;
    newNpc(options: NpcProperties): any;
}
export {};
