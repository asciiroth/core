import { World, Player, Stage, Stages } from './';

export class Game {
    private _stages: Stages = new Stages();
    private _stage: Stage;
    private _world: World;
    private _player: Player

    constructor(
        private _name: string
    ) { }

    public get name(): string {
        return this._name;
    }

    public setWorld(world: World): void {
        this._world = world;
    }

    public get world(): World {
        return this._world;
    }

    public setPlayer(player: Player): void {
        this._player = player;
    }

    public get player(): Player {
        return this._player;
    }

    public get stage(): string {
        return this._stage.name;
    }

    public setStage(stageName: string): void {
        const stage = this._stages.findStage(stageName);
        if (stage) {
            this._stage = stage;
            return;
        }

        throw new Error(`Cannot find stage ${stageName}`);
    }

    public get stages(): Stages {
        return this._stages;
    }
}
