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

    public get stage(): Stage {
        return this._stage;
    }

    public get stages(): Stages {
        return this._stages;
    }
}
