import { World, Player, Stage, Stages } from './';
export declare class Game {
    private _name;
    private _stages;
    private _stage;
    private _world;
    private _player;
    constructor(_name: string);
    readonly name: string;
    setWorld(world: World): void;
    readonly world: World;
    setPlayer(player: Player): void;
    readonly player: Player;
    readonly stage: Stage;
    readonly stages: Stages;
}
