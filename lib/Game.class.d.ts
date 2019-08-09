import { World, Player, Stage, Entity, Entities, Npc } from './';
import { PlayerProperties, EntityProperties, NpcProperties } from './interfaces';
import { BaseStore } from './stores/Base.store';
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
    addStage(name: string): void;
    setStage(stage: Stage): void;
    readonly stages: BaseStore<Stage>;
    readonly entities: Entities;
    readonly output: string[];
    addOutput(output: string): void;
    newEntity(options: EntityProperties): Entity | Npc;
    newNpc(options: NpcProperties): Entity | Npc;
}
