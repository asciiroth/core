import { World, Player, Stage, Stages } from './';
export declare class Game {
    private _name;
    private _stages;
    private _stage;
    private _world;
    private _player;
    constructor(_name: string);
    readonly name: string;
    addWorld(world: World): void;
    readonly world: World;
    addPlayer(player: Player): void;
    readonly player: Player;
    readonly stage: Stage;
    readonly stages: Stages;
}
