import { World, Player, Stages, Entity, Entities, Npc } from './';
import { PlayerProperties, EntityProperties, NpcProperties } from './interfaces';
export declare class Game {
    private _name;
    private _stages;
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
    setStage(stageName: string): void;
    readonly stages: Stages;
    readonly entities: Entities;
    readonly output: string[];
    addOutput(output: string): void;
    newEntity(options: EntityProperties): Entity | Npc;
    newNpc(options: NpcProperties): Entity | Npc;
}
